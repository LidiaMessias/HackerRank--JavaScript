const gerarLista = listaAlunos => {
    var totalP1 = 0;
    var totalP2 = 0;
    var aprovados = 0;
    var reprovados = 0;

    var lista = "<table><thead><tr>"
    //var listaHTML = "<div id='lista'><table><thead><tr>"
    + "<th> Nome </th>"
    + "<th> RA </th>"
    + "<th> Nota da P1 </th>"
    + "<th> Nota da P2 </th>"
    + "<th> Média do Aluno </th>"
    + "</tr>"
    + "</thead>"
    + "<tbody>";

    listaAlunos.forEach(aluno => {

        var mediaAluno = (aluno.notaP1 + aluno.notaP2) / 2;
        var corP1 = aluno.notaP1 < 6 ? 'red' : 'blue';
        var corP2 = aluno.notaP2 < 6 ? 'red' : 'blue';
        
        lista += "<tr>"
            + "<td>" + aluno.nome + "</td>"
            + "<td>" + aluno.ra + "</td>" 
            + "<td style='color: " + corP1 + ";'>" + aluno.notaP1 + "</td>"
            + "<td style='color: " + corP2 + ";'>" + aluno.notaP2 + "</td>"
            + "<td>" + mediaAluno + "</td>"
            + "</tr>";

        if (mediaAluno >= 6) 
            aprovados += 1;
        else 
            reprovados += 1;

        totalP1 += aluno.notaP1;
        totalP2 += aluno.notaP2;
    });

    lista += "</tbody>"
        + "</table>";

    var mediaP1 = totalP1 / listaAlunos.length;
    var mediaP2 = totalP2 / listaAlunos.length;
 
    var situacao = "<table><thead><tr>"
    + "<th> Média da P1 </th>"
    + "<th> Média da P2 </th>"
    + "<th> Qtde. Aprovados </th>"
    + "<th> Qtde. Reprovados </th>"
    + "</tr>"
    + "</thead>"
    + "<tbody>"
    + "<tr>"
    + "<td>" + mediaP1 + "</td>"
    + "<td>" + mediaP2 + "</td>"
    + "<td>" + aprovados + "</td>"
    + "<td>" + reprovados + "</td>"
    + "</tr></tbody></table>";
    
    document.write(lista);
    document.write(situacao);
    
}