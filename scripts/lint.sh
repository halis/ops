
NODE_PATH=./src eslint \
  . --ext js,jsx \
&& echo No JS lint errors \
&& echo \
&& ./node_modules/.bin/sass-lint '**/*.scss' -v \
&& echo No Sass lint errors \
&& echo;
