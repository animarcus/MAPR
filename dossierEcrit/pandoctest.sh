#!/bin/bash

cp ./themes/tango.json ./themes/tango.theme

pandoc "$1" \
	-f markdown \
	--include-in-header ./template/main.tex \
	--include-in-header ./template/code.tex \
	--highlight-style ./themes/javascript.theme \
    --pdf-engine=xelatex \
	--mathjax \
	-V linkcolor:blue \
    -V geometry:a4paper \
    -V geometry:margin=2cm \
    -o "$2"
