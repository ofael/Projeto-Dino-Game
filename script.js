const dino = document.querySelector('.dino');
const background = document.querySelector('.background')
let position = 0;

let isJump = false;

function handleKeyUp(event){

    if(event.keyCode === 32){
        if(!isJump){
            jump();
        }
    }
}

function jump(){
    isJump = true;
    let uperInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(uperInterval);
            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    isJump = false;
                }else{
                    position -= 5;
                    dino.style.bottom = position + 'px';
                }
            }, 10)
        }else{
            position += 5;
            dino.style.bottom = position + 'px';
        }
    }, 10)
}

function creatCactus(){
    const cactus = document.createElement('div')
    let cactusPosition = 1000;
    let timeRandom = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px'
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim do jogo</h1>'
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    },20);

    setTimeout(creatCactus, timeRandom)
}

creatCactus();

document.addEventListener('keyup', handleKeyUp)