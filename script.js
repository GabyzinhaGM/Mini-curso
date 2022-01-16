const primeiraImagem = document.querySelector('#img1');
const segundaImagem = document.querySelector('#img2');
const terceiraImagem = document.querySelector('#img3');
const botao = document.querySelector('button');
const primeiroPersonagem = document.querySelector('#primeiro');
const segundoPersonagem = document.querySelector('#segundo');
const terceiroPersonagem = document.querySelector('#terceiro');

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let primeiroNumero = gerarValorAletorio();
    let segundoNumero = gerarValorAletorio();
    let terceiroNumero = gerarValorAletorio();

    fetch(`https://rickandmortyapi.com/api/character/${primeiroNumero},${segundoNumero},${terceiroNumero}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {

        primeiraImagem.src = data[0].image;
        primeiraImagem.alt = data[0].name;
        primeiroPersonagem.innerHTML = data[0].name + ", " + data[0].status + ", " + data[0].species;

        segundaImagem.src = data[1].image;
        segundaImagem.alt = data[1].name;
        segundoPersonagem.innerHTML = data[1].name + ", " + data[1].status + ", " + data[1].species;

        terceiraImagem.src = data[2].image;
        terceiraImagem.alt = data[2].name;
        terceiroPersonagem.innerHTML = data[2].name + ", " + data[2].status + ", " + data[2].species;
    });
}

botao.onclick = pegarPersonagem;