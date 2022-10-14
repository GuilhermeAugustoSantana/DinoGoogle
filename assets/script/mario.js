const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const pula = () => {
   mario.classList.add('pula');
   setTimeout(() => {
      mario.classList.remove('pula');
   }, 900);
};

const gameOver = setInterval(() => {
   const pipePosicao = pipe.offsetLeft;
   const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '');
   verifGame(pipePosicao, marioPosicao);

}, 10);

document.addEventListener('keydown', pula);

function verifGame(pipePosicao, marioPosicao) {

   if (pipePosicao <= 105 && pipePosicao > 0 && marioPosicao < 90) {

      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosicao}px`;

      mario.style.animation = 'none';
      mario.style.bottom = `${marioPosicao}px`;

      mario.src = 'assets/img/game_over.png'
      mario.style.marginBottom = '-14px';

      clearInterval(gameOver);
   }
}