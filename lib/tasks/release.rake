namespace :lesli_assets do
namespace :release do
    desc "Update BUILD timestamp in lib/<gem>/version.rb"
    task :build2 do
        version_file = File.expand_path("../../lesli/version.rb", __dir__)
        timestamp = Time.now.to_i.to_s

        content = File.read(version_file)
        content.gsub!(/BUILD\s*=\s*"[^"]*"/, %(BUILD = "#{timestamp}"))

        #File.write(version_file, content)

        puts "Updated BUILD to #{timestamp} in #{version_file}"
    end
end
end
