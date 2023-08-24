#!/bin/bash

pandoc "$1" \
	-f markdown \
	--include-in-header ./template/main.tex \
	--include-before-body ./template/cover.tex \
	--highlight-style ./themes/javascript.theme \
    --pdf-engine=xelatex \
	--mathjax \
	--toc \
	--toc-depth 3 \
	-V linkcolor:blue \
    -V geometry:a4paper \
    -V geometry:margin=1in \
	-V lang=fr \
    -o "$2"
