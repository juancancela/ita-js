/**
 * Implementation of an insertion sort algorithm within Ө(n^2)
 * @param unsortedArray an unsorted array
 * @returns {*} a sorted array
 * !Note: returned array is in decreased order (n, n-1, n-2, ...)
 */
function insertionSortDecreasing(unsortedArray){
    for(var i = 1; i < unsortedArray.length; i++){
        var rightValue = unsortedArray[i];
        for(var j = i - 1; j >= 0; j--){
            var leftValue = unsortedArray[j];
            if(rightValue > leftValue){
                unsortedArray[j+1] = leftValue;
                unsortedArray[j] = rightValue;
            } else {
                break;
            }
        }
    }
    return unsortedArray;
}

module.exports = {
    insertionSortDecreasing : insertionSortDecreasing
};
