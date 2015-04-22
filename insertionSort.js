/**
 * Implementation of an insertion sort algorithm
 * @param unsortedArray an unsorted array
 * @returns {*} a sorted array
 */
function insertionSort(unsortedArray){
  for(var i = 1; i < unsortedArray.length; i++){
    var rightValue = unsortedArray[i];
    for(var j = i - 1; j >= 0; j--){
      var leftValue = unsortedArray[j];
      if(rightValue < leftValue){
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
  insertionSort : insertionSort
};
