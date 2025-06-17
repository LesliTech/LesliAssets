module LesliAssets
    class Engine < ::Rails::Engine
        isolate_namespace LesliAssets

        initializer "lesli_assets.assets.precompile" do |app|
            app.config.assets.precompile += %w[lesli_assets_manifest.js]
        end
    end
end
