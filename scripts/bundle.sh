
webpack --config ./src/webpack/index.js --progress --colors \
&& node-sass --include-path ./src ./templates/sass/style.scss ./public/css/bundle.min.css --output-style compressed
