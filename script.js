//stats
let player = {
    health:     100,
    //attack:   10-15,
    block:      5
};
let enemy = {
    health:     100,
    //attack:   10-15,
    block:      5
};

//flags
let Eattack = false;

//easier access for css
let playerCSS = document.getElementById('player');
let enemyCSS = document.getElementById('enemy');

//functions 
function fate(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function attack() {
    let random = fate(10, 15);
    Echoice();
    if(!Eattack) { 
        enemy.health -= random - enemy.block;
        setPlayerAnimation(1);
    } else {
        enemy.health -= random;
        random = fate(10, 15);
        player.health -= random;
        setPlayerAnimation(1);
    }
    console.log(player.health)
    console.log(enemy.health)
}

function block() {
    let random = fate(10, 15);
    Echoice();
    if(Eattack)
        player.health -= random - player.block;
    console.log(player.health)
    console.log(enemy.health)
}

function Echoice() {
    let choice = fate(0, 100)
    if(choice <= 50)
        Eattack = true;
    else
        Eattack = false;
}

function setPlayerAnimation(id) {
    //id == 1 means that player is attacking 
    if(id == 1) {
        playerCSS.style.animationName = "playerWalkAni";

        setTimeout(function() {
            playerCSS.style.animationName = "playerAttackAni";
        }, 4000);


        setTimeout(function() {
            playerCSS.style.animationName = "playerStandAni";
        }, 4860);

    }
}








