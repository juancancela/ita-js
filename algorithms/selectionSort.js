/**
 * Given an unsorted n-size array, sort it using selection sort
 * @param unsortedArray an unsorted array
 */
function selectionSort(unsortedArray){
    for(var i = 0; i < unsortedArray.length - 1; i++){
        var minValue = Number.MAX_SAFE_INTEGER;
        var posMinValue = -1;
        for(var j = i+1; j < unsortedArray.length; j++){
            if(unsortedArray[j] < minValue){
                minValue = unsortedArray[j];
                posMinValue = j;
            }
        }
        var minValue = unsortedArray[i];
        unsortedArray[i] = unsortedArray[posMinValue];
        unsortedArray[posMinValue] = minValue;
    }
    return unsortedArray;
}

module.exports = {
  selectionSort : selectionSort
};