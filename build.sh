#!/bin/bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --pack-extension=./wuju-chrome --pack-extension-key=./wuju-chrome.pem
zip -r wuju-chrome.zip ./wuju-chrome
