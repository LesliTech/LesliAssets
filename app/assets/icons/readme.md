
### Icons preprocessing 
Automatically generate an SVG sprite from a folder of SVG icons.

Execute Lesli engine root level
```bash

npm install -g svgo

gem install svgeez

svgo -f ./app/assets/icons/lesli_assets/engines -o ./app/assets/icons/lesli_assets/engines
svgo -f ./app/assets/icons/lesli_assets/gems -o ./app/assets/icons/lesli_assets/gems

svgeez build --prefix="" --source ./app/assets/icons/lesli_assets --destination ./app/views/lesli_assets/partials/_application-lesli-icons-gems.svg

mv ./app/views/lesli_assets/partials/_application-lesli-icons-gems.svg ./app/views/lesli/partials/_application-lesli-icons-gems.html.erb
```
