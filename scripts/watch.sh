
nodemon -e scss -x "node-sass --include-path ./src ./templates/sass/style.scss ./public/css/bundle.min.css" &
webpack --config ./src/webpack/index.js --progress --colors --watch &
