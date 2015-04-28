/**
 * Function that sorts an unsorted array within Ө(n^2)
 * @param unsortedArray array to be sorted
 * @returns {*} sorted array
 */
function bubbleSort(unsortedArray) {
    var swap = true;
    while (swap) {
        swap = false;
        for (var i = 1; i < unsortedArray.length; i++) {
            if (unsortedArray[i - 1] > unsortedArray[i]) {
                swap = true;
                var temporal = unsortedArray[i];
                unsortedArray[i] = unsortedArray[i - 1];
                unsortedArray[i - 1] = temporal;
            }
        }
    }
    return unsortedArray;
}

module.exports = {
    bubbleSort : bubbleSort
};
