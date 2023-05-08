import {suma} from './suma.js'

test('Si recibo 2 numeros como argumento, devuelve la suma de ambos',()=>{
    expect(suma(2,4)).toBe(6);
    expect(suma(1,4)).toBe(5);

})

test('Si recibo menos de 2 numeros como argumento, devuelve "Error"',()=>{
    expect(suma(2)).toBe("Error");
    expect(suma()).toBe("Error");
})