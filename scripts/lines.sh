find . -name '*.js' | grep -v node_modules | grep -v bundle | grep -v coverage | xargs wc -l \
&& echo \
&& find . -name '*.scss' | grep -v node_modules | grep -v bundle | xargs wc -l \
&& echo;
