# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ahmedwaleed03/lotide`

**Require it:**

`const _ = require('@ahmedwaleed03/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
assertEqual(actual, expected)     : prints whether the two variables are the same
assertArraysEqual(array1, array2) : prints whether the two arrays are the same
assertObjectsEqual (obj1, obj2)   : prints whether the two objects are the same
eqArrays(array1, array2)          : returns whether the two arrays are the same
eqObjects                         : returns whether the two objects are the same
head(array)                       : returns the head of the array
tail(array)                       : returns the tail of the array
middle(array)                     : returns the middle of the array
countLetters(sentence)            : returns the number of times each letter appears in the sentence
countOnly(allItems, itemsToCount) : returns how many times the specfic keys appear in an array 
findKeyByValue(obj, val)          : returns first key in object where the value is found
letterPositions(sentence)         : returns an object which contains arrays of positions for each letter
without(source, itemsToRemove)    : returns the array without the specified items