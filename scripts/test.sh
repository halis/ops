#!/bin/bash

NODE_PATH=./src node --max_old_space_size=2048 \
  ./node_modules/.bin/_mocha \
  $(find ./ -name '*.test.js' | grep -v /node_modules/ | grep -v /coverage/);
