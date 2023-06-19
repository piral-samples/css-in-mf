#!/bin/bash

SOLUTIONS=('convention' 'css-modules' 'default' 'emotion' 'shadow-dom' 'styled-components' 'tailwind' 'vanilla-extract')
MFS=('mf-red' 'mf-blue')

for SOLUTION in "${SOLUTIONS[@]}"
do
  cd solutions/$SOLUTION

  for MF in "${MFS[@]}"
  do
    cd $MF
    npm install
    cd ..
  done
  
  cd ../..
done
