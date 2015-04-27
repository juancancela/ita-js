var assert = require("assert");
var insertionSortIncreasingRecursive = require('../algorithms/insertionSortIncreasingRecursive').insertionSortIncreasingRecursive;

describe('Insertion Sort Incresing Recursive', function(){
    describe('#insertionSortDecreasing(unsortedArray)', function(){
        it('should sort [6,5,4,2,1,3] -> [6,5,4,3,2,1]', function(){
            var unsortedArray = [6,5,4,2,1,3];
            var sortedArray = insertionSortIncreasingRecursive(unsortedArray);
            assert.equal(1, sortedArray[0]);
            assert.equal(2, sortedArray[1]);
            assert.equal(3, sortedArray[2]);
            assert.equal(4, sortedArray[3]);
            assert.equal(5, sortedArray[4]);
            assert.equal(6, sortedArray[5]);
        })
    })
});