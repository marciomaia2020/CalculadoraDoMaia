//console.log('Provando que o javascript está funcional');


//Pegar os elementos do HTML via DOM
//console.log(soma);
//alert(soma);
const soma = document.getElementById('soma');
const subtracaoab = document.getElementById('subtracaoab');
const subtracaoba = document.getElementById('subtracaoba');
const multiplicacao = document.getElementById('multiplicacao');
const divisaoab = document.getElementById('divisaoab');
const divisaoba = document.getElementById('divisaoba');
const potenciaab = document.getElementById('potenciaab');
const potenciaba = document.getElementById('potenciaba');
const raizquadradaa = document.getElementById('raizquadradaa');
const raizquadradab = document.getElementById('raizquadradab');
const fatoriala = document.getElementById('fatoriala');
const fatorialb = document.getElementById('fatorialb');
const porcentagemab = document.getElementById('porcentagemab');
const porcentagemba = document.getElementById('porcentagemba');
const media = document.getElementById('media');


//Adicionar DINAMICAMENTE um valor no ID la no html
soma.innerHTML = 0;
subtracaoab.innerHTML = 0;
subtracaoba.innerHTML = 0;
multiplicacao.innerHTML = 0;
divisaoab.innerHTML = 0;
divisaoba.innerHTML = 0;
potenciaab.innerHTML = 0;
potenciaba.innerHTML = 0;
raizquadradaa.innerHTML = 0;
raizquadradab.innerHTML = 0;
fatoriala.innerHTML = 0;
fatorialb.innerHTML = 0;
porcentagemab.innerHTML = 0;
porcentagemba.innerHTML = 0;
media.innerHTML = 0;


//https://www.w3schools.com/js/js_math.asp

//Construir as funções Clássicas (COM OS CÁLCULOS)
function CalcularSoma(a, b){
   return a + b;
}
function CalcularSubtracaoab(a, b){
    return a - b;
}
function CalcularSubtracaoba(b, a){
    return b - a;
}
function CalcularMultiplicacao(a, b){
    return a * b;
}
function CalcularDivisaoab(a, b){
    return (a / b).toFixed(2);
}
function CalcularDivisaoba(b, a){
    return (b / a).toFixed(2);
}
function CalcularPotenciaab(a, b){
    return Math.pow(a, b);
}
function CalcularPotenciaba(b, a){
    return Math.pow(b, a);
}
function CalcularRaizQuadradaa(a){
    return Math.sqrt(a).toFixed(2);
}
function CalcularRaizQuadradab(b){
    return Math.sqrt(b).toFixed(2);
}
function CalcularFatoriala(a){
    if(a < 0){
        return "o numero tem que ser positivo."
    }
    //base case
    if(a == 0 || a == 1){
        return 1;
    //recursive case
    }else{
        return a * CalcularFatoriala(a-1);
    }
}
function CalcularFatorialb(b){
    if(b < 0){
        return "o numero tem que ser positivo."
    }
    //base case
    if(b == 0 || b == 1){
        return 1;
    //recursive case
    }else{
        return b * CalcularFatoriala(b-1);
    }
}
function CalcularPorcentagemab(a, b){
    return ((a * 100) / b).toFixed(0)+ '%';
    //return `${((a * 100) / b).toFixed(0)}%`;
}
function CalcularPorcentagemba(b, a){
    return((b * 100) / a).toFixed(0)+ '%';
    //return `${((b * 100) / a).toFixed(0)}%`;
}
function CalcularMedia(a, b){
   return((a + b) / 2);
}

/*********apaga isso para aparecer os valores zero */
//Criar a funcão par fazer os calculos
function calcular(){
 const inputA = document.getElementById('primeiroNumero').value;
 const inputB = document.getElementById('segundoNumero').value;

 //console.log('inputA', inputA, 'inputB', inputB);
    //console.log(CalcularSoma(inputA, inputB));

//Transformando o valor do inputA e inputB (que é uma string) em numeros
let a = parseFloat(inputA);
let b = parseFloat(inputB);
    //console.log(a , b);
    //console.log(typeof CalcularSoma(a,b));
    //console.log(CalcularSoma(a,b));

    soma.innerHTML = CalcularSoma(a, b);
    subtracaoab.innerHTML = CalcularSubtracaoab(a, b);;
    subtracaoba.innerHTML = CalcularSubtracaoba(b, a);
    multiplicacao.innerHTML = CalcularMultiplicacao(a, b);
    divisaoab.innerHTML = CalcularDivisaoab(a, b);
    divisaoba.innerHTML = CalcularDivisaoba(b, a);
    potenciaab.innerHTML = CalcularPotenciaab(a, b);
    potenciaba.innerHTML = CalcularPotenciaba(b, a);
    raizquadradaa.innerHTML = CalcularRaizQuadradaa(a);
    raizquadradab.innerHTML = CalcularRaizQuadradab(b);
    fatoriala.innerHTML = CalcularFatoriala(a);
    fatorialb.innerHTML = CalcularFatorialb(b);
    porcentagemab.innerHTML = CalcularPorcentagemab(a, b);
    porcentagemba.innerHTML = CalcularPorcentagemba(b, a);
    media.innerHTML = CalcularMedia(a, b);
}

//Fim do desafio uffa....aff....eita....caracas....feito.....Meu Deus.. códigos...