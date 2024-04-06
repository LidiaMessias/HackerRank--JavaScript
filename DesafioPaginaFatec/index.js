function obterCodigo() {
    let listaCod = [];
    let disciplina = document.querySelectorAll(".tab-grid-content-header");
    disciplina.forEach((element) => {
        let codigo = element.innerText.slice(-9, -2);
        listaCod.push(codigo);
    });
    return listaCod;
}

obterCodigo();
