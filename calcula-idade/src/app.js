function calculaIdade() {
    var idade = document.getElementById('inpIdade').value;
    var textoIdade = document.getElementById('texto-idade');
    var outputIdade = document.getElementById('num-idade');

    var anoAtual = new Date().getFullYear();
    
    textoIdade.style.visibility = 'visible';
    outputIdade.innerHTML = anoAtual - (idade === '' ? 0 : idade);

}