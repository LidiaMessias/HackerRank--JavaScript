function plusMinus(numeros) {
    let positivos = 0;
    let negativos = 0;
    let zero = 0;

    for (let i=0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            positivos++;
        } else if (numeros[i] < 0) {
            negativos++;
        } else 
            zero++;
    }
    let propPositivo = positivos / numeros.length;
    let propNegativo = negativos / numeros.length;
    let propzero = zero / numeros.length;

    return (propPositivo + '\n' + propNegativo + '\n' + propzero);
    
}