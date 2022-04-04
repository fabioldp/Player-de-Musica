let musicas = [
  {titulo:'Lakey city',artista:'Mon', src:'imagens/mus4.mp3', img:'imagens/carro.jpeg'},
  {titulo:'Lakey city',artista:'T Pro', src:'imagens/mus2.mp3', img:'imagens/carro.jpeg'},
  {titulo:'Lakey city',artista:'ST', src:'imagens/mus3.mp3', img:'imagens/carro.jpeg'}

];



let musica = document.querySelector('audio');
let indexMusica = 0;


let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');


duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));


//Eventos


document.querySelector('.botao-play').addEventListener('click',tocarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.retro').addEventListener('click', () => {
    indexMusica--;
  renderizarMusica(indexMusica);
});

document.querySelector('.avan').addEventListener('click', () => {
    indexMusica++;
  renderizarMusica(indexMusica);
});


//Funcções


function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata',()=>{
     nomeMusica.textContent = musicas[index].titulo;
     nomeArtista.textContent = musicas[index].artista;
     imagem.src = musicas[index].img;
     duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

    });
}



function tocarMusica(){
    musica.play();
}

document.querySelector('.botao-pause').addEventListener('click',pausarMusica);

function pausarMusica(){
    musica.pause();
}

function atualizarBarra(){

    let barra = document.querySelector('progress');
    barra.style.width =Math.floor((musica.currentTime / musica.duration) * 100) + '%'; 
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos (Math.floor(musica.currentTime));


}

function segundosParaMinutos(segundos){
 let campoMinutos = Math.floor(segundos / 60);
 let campoSegundos= segundos % 60;
 if (campoSegundos <10){
     campoSegundos = '0' + campoSegundos;
 }
 return campoMinutos +':'+campoSegundos;

}

