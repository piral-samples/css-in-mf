#!/bin/bash

if [ $1 != 'demo' ]
then
  cd solutions/$1
  ./run.sh
else
  cd demo
  ./run.sh
fi
