/**
 * Function that searches within worst case of Ө(log n) a given value in an ordered array
 * @param searchedValue value to be searched
 * @param orderedArray ordered array where value will be searched
 * @returns {*} value if its found, null otherwise
 */
function binarySearch(searchedValue, orderedArray){
    var pivot = Math.floor(orderedArray.length / 2);

    /* termination statement */
    if(orderedArray.length == 1){
        if(orderedArray[0] == searchedValue){
            return searchedValue;
        } else {
            return null;
        }
    }

    if(orderedArray[pivot-1] >= searchedValue){
        return binarySearch(searchedValue, orderedArray.slice(0, pivot));
    } else {
        return binarySearch(searchedValue, orderedArray.slice(pivot, orderedArray.length));
    }
}

module.exports = {
    binarySearch : binarySearch
};