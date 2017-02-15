#!/bin/bash

npm run lint \
&& npm run lines \
&& npm run cover \
&& npm run bundle \
&& echo && echo Node Version $(node --version) && echo;
