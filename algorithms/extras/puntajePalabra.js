/**
 * Haciendo uso de la posición de las letras en el código ASCII, calculamos el valor de la misma.
 * @param letra la letra sobre la cual se calculara el puntaje
 * @returns {number} the valor de la letra en una serie tal que a = 1, b = 2, ...
 */
function puntajeLetra(posicion, letra) {
    var OFFSET_ASCII = 96;
    return (letra.toLowerCase().charCodeAt(0) - OFFSET_ASCII) * (posicion + 1);
}

/**
 * Genera las n combinaciones de la palabra dada.
 * @param palabra Palabra usada para generar las combinaciones
 * @returns {Array} Array de combinaciones de la palabra dada.
 */
function permutator(palabra) {
    var permutaciones = [];

    function permute(arr, memo) {
        var actual;
        var memo = memo || [];

        for (var i = 0; i < arr.length; i++) {
            actual = arr.splice(i, 1);
            if (arr.length === 0) {
                permutaciones.push(memo.concat(actual));
            }
            permute(arr.slice(), memo.concat(actual));
            arr.splice(i, 0, actual[0]);
        }

        return permutaciones;
    }

    return permute(palabra);
}

/**
 * Ejercicio propuesto por sitio hackealo.co
 *
 * El "puntaje" de una palabra es la suma del puntaje de cada letra. El "puntaje" de una letra es la posición en donde
 * se encuentra en una palabra, multiplicada por su posición en el abecedario. Por ejemplo, el puntaje de "acb" es
 * (1*1) + (2*3) + (3*2).
 *
 * ¿Cuál es la suma de las puntuaciones de las permutaciones de "kTBXJJU"?
 *
 * @param palabra palabra de la cual calcularemos su "puntaje"
 */
function puntajePalabra(palabra) {
    if (!palabra) return 0;
    var puntajePalabra = 0;
    var permutacionesPalabra = permutator(palabra.split(""));
    permutacionesPalabra.forEach(function (combinacion) {
        for (var i = 0; i < combinacion.length; i++) {
            puntajePalabra += puntajeLetra(i, combinacion[i]);
        }
    });
    return puntajePalabra;
}

/**
 * Public Interface
 * @type {{puntajePalabra: puntajePalabra}}
 */
module.exports = {
    puntajePalabra: puntajePalabra
};

