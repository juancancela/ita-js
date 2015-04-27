var assert = require("assert");
var binarySearch = require('../algorithms/binarySearch').binarySearch;

describe('Binary Search', function(){
    describe('#binarySearch(searchedValue, orderedArray)', function(){
        it('should return searched value when searched value is in the provided ordered array', function(){
            var orderedArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
            var searchedValue = 5;
            var position = binarySearch(searchedValue, orderedArray);
            assert.equal(position, 5);
        });

        it('should return null when searched value is not in the provided ordered array', function(){
            var orderedArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
            var searchedValue = 99;
            var position = binarySearch(searchedValue, orderedArray);
            assert.equal(position, null);
        });
    })
});