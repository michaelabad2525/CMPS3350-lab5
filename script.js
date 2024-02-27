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

//functions 
function fate(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function attack() {
    let random = fate(10, 15);
    Echoice();
    if(!Eattack) 
        enemy.health -= random - enemy.block;
    else {
        enemy.health -= random;
        random = fate(10, 15);
        player.health -= random;
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
