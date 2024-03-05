//stats
let player = {
    health:     100,
    attack:   "10-15",
    block:      5
};
let enemy = {
    health:     100,
    attack:   "10-15",
    block:      5
};

//flags
let Eattack = false;
let locked = false;

//easier access for css
let playerCSS = document.getElementById('player');
let enemyCSS = document.getElementById('enemy');

//functions 
function stats() {
    document.getElementById("pHP").innerHTML = "Health: " + (player.health);
    document.getElementById("pATK").innerHTML = "ATK: " + (player.attack);
    document.getElementById("pBLK").innerHTML = "Block: " + (player.block);
    document.getElementById("eHP").innerHTML = "Health: " + (enemy.health);
    document.getElementById("eATK").innerHTML = "ATK: " + (enemy.attack);
    document.getElementById("eBLK").innerHTML = "Block: " + (enemy.block);
    document.getElementById("M").innerHTML = "";
    document.getElementById("M").disabled = true;
}

function fate(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function attack() {
    if(!locked) {
        locked = true;
        setTimeout(unlock, 8800);
        let random = fate(10, 15);
        Echoice();
        if(!Eattack) {
            enemy.health -= random - enemy.block;
            setPlayerAnimation(1);
        } else {
            //enemy.health -= random;
            random = fate(10, 15);
            player.health -= random;
            setPlayerAnimation(2);
        }
        setTimeout(function() {
            stats();
            if(player.health <= 0 || enemy.health <=0) {
                document.getElementById("M").disabled = false;   
                gameover();
            }
        }, 4900);
    }
}

function unlock() {
    locked = false;
}

function block() {
    let random = fate(10, 15);
    Echoice();
    if(Eattack)
        player.health -= random - player.block;
    stats();
    if(player.health <= 0 || enemy.health <= 0) {
        document.getElementById("M").disabled = false;   
        gameover();
    }
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
            playerCSS.style.backgroundSize = "300px 300px";
            enemyCSS.style.backgroundSize = "300px 300px";
            playerCSS.style.animationName = "playerAttackAni";
            enemyCSS.style.animationName = "enemyHitAni";
        }, 4000);


        setTimeout(function() {
            playerCSS.style.backgroundSize = "250px 250px";
            enemyCSS.style.backgroundSize = "250px 250px";
            playerCSS.style.animationName = "playerWalkBackAni";
            enemyCSS.style.animationName = "enemyStandAni";
        }, 4900);


        setTimeout(function() {
            playerCSS.style.animationName = "playerStandAni";
        }, 8700);

    } else if (id == 2) {
        enemyCSS.style.animationName = "enemyWalkAni";

        setTimeout(function() {
            playerCSS.style.backgroundSize = "300px 300px"; 
            enemyCSS.style.backgroundSize = "300px 300px";
            enemyCSS.style.animationName = "enemyAttackAni";
            playerCSS.style.animationName = "playerHitAni";
        }, 4000);

        setTimeout(function() { 
            playerCSS.style.backgroundSize = "250px 250px";
            enemyCSS.style.backgroundSize = "250px 250px";
            enemyCSS.style.animationName = "enemyWalkBackAni";
            playerCSS.style.animationName = "playerStandAni";
        }, 4900);

        setTimeout(function() {
            enemyCSS.style.animationName = "enemyStandAni";
        }, 8700);
    }
}

function gameover() {
    document.getElementById("L").innerHTML = "";
    document.getElementById("L").disabled = true;
    document.getElementById("R").innerHTML = "";
    document.getElementById("R").disabled = true;
    document.getElementById("M").innerHTML = "Try Again?";
}

function refresh() {
    player.health = 100;
    enemy.health = 100;
    stats();
    document.getElementById("L").innerHTML = "Attack";
    document.getElementById("L").disabled = false;
    document.getElementById("R").innerHTML = "Block";
    document.getElementById("R").disabled = false;

}
