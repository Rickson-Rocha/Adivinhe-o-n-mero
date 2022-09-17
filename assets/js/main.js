
const form = document.querySelector('#formulario');
const gerado = gerarNumero();
console.log(gerado)

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPalpite = e.target.querySelector('#palpite');

  const palpite = Number(inputPalpite.value);

  if (!palpite || palpite =='') {
    setResultado('Valor inválido,digite um número!', false);
    return;
  }
  
  
  const msg = situacao(palpite,gerado)
  

  setResultado(msg, true);
});

function situacao (palpite,gerado) {
  const nivel = ['Parabéns,você acertou!', 'Ops,não foi dessa vez.Tente novamente', 'Quase! Vamos lá,tente outra vez'];

  if (palpite == gerado) return nivel[0];
  if (palpite > gerado) return nivel[1];
  if (palpite < gerado) return nivel[2];
}

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  }
   else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);

}
function gerarNumero(){
    
    let gerar =  Math.floor(Math.random() * 20+1);

    return gerar;
}