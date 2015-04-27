/**
 * Given an unsorted n-size array, sort it using merge sort within Ө(n * lg n)
 * @param unsortedArray an unsorted array
 */
function mergeSort(unsortedArray){
    var pivot = Math.floor(unsortedArray.length / 2);
    if(unsortedArray.length <= 1){
        return unsortedArray;
    }
    var leftArray = mergeSort(unsortedArray.slice(0, pivot));
    var rightArray = mergeSort(unsortedArray.slice(pivot, unsortedArray.length));

    return _merge(leftArray, rightArray);
}

/**
 * Internal function used to sort two arrays
 * @param unsortedLeftArray an unsorted array
 * @param unsortedRightArray another unsorted array
 * @returns {Array} a sorted array
 * @private
 */
function _merge(unsortedLeftArray, unsortedRightArray){
    var sortedArray = [];
    while(unsortedLeftArray.length > 0 && unsortedRightArray.length > 0){
        if (unsortedLeftArray[0] <= unsortedRightArray[0]){
            sortedArray.push(unsortedLeftArray[0]);
            unsortedLeftArray.shift();
        } else {
            sortedArray.push(unsortedRightArray[0]);
            unsortedRightArray.shift();
        }
    }
    while(unsortedLeftArray.length > 0){
        sortedArray.push(unsortedLeftArray[0]);
        unsortedLeftArray.shift();
    }
    while(unsortedRightArray.length > 0){
        sortedArray.push(unsortedRightArray[0]);
        unsortedRightArray.shift();
    }

    return sortedArray;
}

module.exports = {
    mergeSort : mergeSort
};