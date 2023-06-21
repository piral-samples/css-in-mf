#!/bin/bash

SOLUTIONS=('convention' 'css-modules' 'default' 'emotion' 'shadow-dom' 'styled-components' 'tailwind' 'vanilla-extract')
MFS=('mf-red' 'mf-blue')

for SOLUTION in "${SOLUTIONS[@]}"
do
  echo "Setting up $SOLUTION ..."
  cd solutions/$SOLUTION

  for MF in "${MFS[@]}"
  do
    cd $MF
    npm install
    cd ..
  done
  
  cd ../..

  if [ $SOLUTION != 'default' ]
  then
    cd demo/mf-$SOLUTION
    npm install
    cd ../..
  fi
done
