const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const nuvens = document.querySelector('.nuvens');

const containerGamenOver = document.querySelector('.container-game-over')

const pula = () => {
   mario.classList.add('pula');
   setTimeout(() => {
      mario.classList.remove('pula');
   }, 900);
};

const gameOver = setInterval(() => {
   const pipePosicao = pipe.offsetLeft;
   const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '');
   const nuvensPosicao = nuvens.offsetLeft;
   verificaGame(pipePosicao, marioPosicao, nuvensPosicao);

}, 10);

document.addEventListener('keydown', pula);

function verificaGame(pipePosicao, marioPosicao, nuvensPosicao) {

   if (pipePosicao <= 105 && pipePosicao > 0 && marioPosicao < 90) {

      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosicao}px`;

      nuvens.style.animation = 'none';
      nuvens.style.left = `${nuvensPosicao}px`;

      mario.style.animation = 'none';
      mario.style.bottom = `${marioPosicao}px`;

      mario.src = 'assets/img/game_over.png'
      mario.style.marginBottom = '-14px';

      containerGamenOver.style.opacity = 1;

      clearInterval(gameOver);
   }
}

const bottomReload = document.querySelector('.container-game-over button');

bottomReload.addEventListener('click', () => {
   location.reload();
});