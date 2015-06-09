var assert = require("assert");
var wordValue = require('../../algorithms/extras/puntajePalabra').wordValue;

describe('El "puntaje" de una palabra es la suma del puntaje de cada letra. El "puntaje" de una letra es la posición en ' +
'donde se encuentra en una palabra, multiplicada por su posición en el abecedario. Por ejemplo, el puntaje de "acb" es  ' +
'(1*1) + (2*3) + (3*2).', function(){
    describe('#puntajePalabra(palabra)', function(){
        it('acb == (1*1)+(2*3)+(3*2) => 72', function(){
            assert.equal(72, wordValue("acb"));
        })
    });

    describe('#puntajePalabra(palabra)', function(){
        it('kTBXJJU => 1975680', function(){
            assert.equal(1975680, wordValue("kTBXJJU"));
        })
    })
});