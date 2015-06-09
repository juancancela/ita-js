/**
 * Exercise proposed by hackealo.co
 *
 * Original (Spanish)
 * El "puntaje" de una palabra es la suma del puntaje de cada letra. El "puntaje" de una letra es la posición en donde
 * se encuentra en una palabra, multiplicada por su posición en el abecedario. Por ejemplo, el puntaje de "acb" es
 * (1*1) + (2*3) + (3*2).
 *
 * ¿Cuál es la suma de las puntuaciones de las permutaciones de "kTBXJJU"?
 *
 * Translation:
 *
 * The "value" of a word is the sum of the value of each of its characters.
 * The "value" of a character is the product of the position of the character in the work by the position in the alphabet.
 * IE, the value of "abc" is (1*1) + (2*3) + (3*2)
 *
 */


/**
 * Based on ASCII position, returns the value of a character, taking in consideration the offset.
 * @param character character to which value will be calculated
 * @returns {number} value of character
 */
function characterValue(position, character) {
    var OFFSET_ASCII = 96;
    return (character.toLowerCase().charCodeAt(0) - OFFSET_ASCII) * (position + 1);
}

/**
 * Generates the n combinations of the given word
 * @param word word
 * @returns {Array} Array with combinations of word
 */
function generatePermutations(word) {
    var permutations = [];

    function permute(arr, memo) {
        var current;
        var memo = memo || [];

        for (var i = 0; i < arr.length; i++) {
            current = arr.splice(i, 1);
            if (arr.length === 0) {
                permutations.push(memo.concat(current));
            }
            permute(arr.slice(), memo.concat(current));
            arr.splice(i, 0, current[0]);
        }

        return permutations;
    }

    return permute(word);
}

/**
 * @param word word de la cual calcularemos su "puntaje"
 */
function wordValue(word) {
    if (!word) return 0;
    var wordValue = 0;
    var wordPermutations = generatePermutations(word.split(""));
    wordPermutations.forEach(function (combination) {
        for (var i = 0; i < combination.length; i++) {
            wordValue += characterValue(i, combination[i]);
        }
    });
    return wordValue;
}

/**
 * Public Interface
 * @type {{wordValue: wordValue}}
 */
module.exports = {
    wordValue: wordValue
};

