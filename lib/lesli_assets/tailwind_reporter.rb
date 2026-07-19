# frozen_string_literal: true

require "termline"

module LesliAssets
    # Adapts Termline's visual language to Tailwind build events while keeping
    # normal messages on stdout and failures on stderr.
    class TailwindReporter
        STYLES = {
            info: { color: :blue, icon: :info },
            success: { color: :green, icon: :success },
            warning: { color: :yellow, icon: :warning },
            danger: { color: :red, icon: :error }
        }.freeze

        def initialize(output: $stdout, errors: $stderr)
            @output = output
            @errors = errors
        end

        def info(message, **data)
            write(@output, :info, message, data)
        end

        def success(message, **data)
            write(@output, :success, message, data)
        end

        def warning(message, **data)
            write(@output, :warning, message, data)
        end

        def danger(message, **data)
            write(@errors, :danger, message, data)
        end

        def error_detail(message)
            # Compiler output is already formatted text, so only add a styled bullet
            # instead of asking Termline to reinterpret the diagnostic.
            bullet = Termline::Style.colorize(Termline::Style.icon(:error), :red)
            @errors.puts("    #{bullet} #{message}")
        end

        private

        def write(stream, level, message, data)
            style = STYLES.fetch(level)

            # Termline's convenience methods write directly to stdout. Building the
            # message here lets danger messages retain the correct stderr destination.
            stream.puts(
                Termline::Msg.builder(
                    message,
                    tag: "TAILWIND:",
                    icon: style[:icon],
                    color: style[:color],
                    data: data,
                    time: false
                )
            )
        end
    end
end
