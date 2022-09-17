//capturando evento de submit do formulário
const form = document.querySelector('#formulario')
let gerado = gerarNumero();

form.addEventListener('submit',function(e){
    e.preventDefault();
    const entrada = e.target.querySelector('#entrada')
    const v_entrada = Number(entrada.value);
   
    
   
});
function setResultado(msg){ 
 const resultado = document.querySelector('#resultado')
 resultado.innerHTML=''
 const p = criar_paragrafo()

}
function criar_paragrafo(){
    const p = document.createElement('p');
    return p;
    
}
function gerarNumero(){
    
    let gerar =  Math.floor(Math.random() * 20+1);

    return gerar;
}

