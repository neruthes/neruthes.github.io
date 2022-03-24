#!/bin/bash

xelatex resume_en.tex
xelatex resume_zh.tex

du -h *.pdf
