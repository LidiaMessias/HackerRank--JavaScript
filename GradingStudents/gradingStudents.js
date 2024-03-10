function gradingStudents(nota) {
    let aux = [];
    for (let i = 0; i < notas.length; i++) {
        let maiorMultiplo5 = Math.round(nota[i] / 5) * 5;
        let diferenca = Math.abs( nota[i] - maiorMultiplo5);
        if (diferenca < 3  && nota[i] >= 38) {
            aux.push(maiorMultiplo5);
        } else {
            aux.push(nota[i]);
        }
    }
    return aux;
    
}   