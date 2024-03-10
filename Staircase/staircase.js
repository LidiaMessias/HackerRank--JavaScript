/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    let aux = [];
    for (let i = 1; i <= n; i++) {
        let linha = '';
        for (let j = 1; j <= n; j++) {
            if (j <= n - i) {
                linha += ' ';
            } else {
                linha += '#';
            }
        }
        aux.push(linha);
    }
    return(aux);
}

