const dino = document.querySelector('.dino');
let position = 0;

function handleKeyUp(event){
    let position = 0;
    if(event.keyCode === 32){
        jump();
    }
}

function jump(){
    let uperInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(uperInterval);
            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                }else{
                    position -= 5;
                    dino.style.bottom = position + 'px';
                }
            })
        }else{
            position += 5;
            dino.style.bottom = position + 'px';
        }
    })
}

document.addEventListener('keyup', handleKeyUp)