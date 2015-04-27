/**
 * Function that sorts an array using a recursive insertion sort algorithm within Ө(n * lg n)
 * @param unsortedArray the array to be sorted
 * @returns {*} a sorted array
 */
function insertionSortIncreasingRecursive(unsortedArray){
    return _insertionSortIncreasingRecursive(1, unsortedArray);
}

/**
 * Internal implementation of an insertion sort algorithm within Ө(n^2)
 * @param unsortedArray an unsorted array
 * @param iteration the recursive iteration number
 * @returns {*} a sorted array
 * !Note: returned array is in increased order (n,n+1,n+2...)
 */
function _insertionSortIncreasingRecursive(iteration, unsortedArray){
    if(iteration < unsortedArray.length){
        var rightValue = unsortedArray[iteration];
        for(var j = iteration - 1; j >= 0; j--){
            var leftValue = unsortedArray[j];
            if(leftValue > rightValue){
                unsortedArray[j+1] = leftValue;
                unsortedArray[j] = rightValue;
            } else {
                break;
            }
        }
        _insertionSortIncreasingRecursive(++iteration, unsortedArray);
    }
    return unsortedArray;
}

module.exports = {
    insertionSortIncreasingRecursive : insertionSortIncreasingRecursive
};