const fireBallButton = document.getElementById("fireBall");
const lightningStrikeButton = document.getElementById("lightningStrike");
const frostBiteButton = document.getElementById("frostBite");

const playerName = document.getElementById('playerName');
const enemyName = document.getElementById('enemyName');
const moveTurn = document.getElementById("moveTurn");

const playerHealth = document.getElementById("playerHealth");
const enemyHealth = document.getElementById("enemyHealth");




let Player = {
    name: "Player 1",
    health: 100,

    moves:[

        { move: 'fire Ball', damage: 10, uses: 5},
        { move: 'lightning Strike', damage: 25, uses: 2},
        { move: 'frost Bite', damage: 15, uses: 2}
    ]

}

const Enemy = {
    name: "Enemy",
    health: 100,

    moves:[
        { move: 'fire Ball', damage: 10, uses: 5},
        { move: 'lightning Strike', damage: 25, uses: 2},
        { move: 'frost Bite', damage: 15, uses: 2}
    ]

}

function enemyTurn() {
  if (Enemy.health <= 0 || Player.health <= 0) return;

  showTurnMessage(`${Enemy.name}'s turn...`);
  
  setTimeout(() => {
    const availableMoves = Enemy.moves.filter(move => move.uses > 0);

    if (availableMoves.length === 0) {
      enableButtons();
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    const move = availableMoves[randomIndex];

    attack(Enemy, move, Player);

    console.log(Enemy.moves);

    if (Player.health <= 0) {
      showTurnMessage(`${Player.name} has been defeated!`);
      disableButtons();
      return;
    }

    setTimeout(() => {
      showTurnMessage(`${Player.name}'s turn! Choose your move.`);
      enableButtons();
    }, 2500);
  }, 2500);
}


function playerTurn(moveIndex) {
  if (Enemy.health <= 0 || Player.health <= 0) return;

  disableButtons(); 
  const move = Player.moves[moveIndex];
  attack(Player, move, Enemy);

  if (Enemy.health <= 0) {
    showTurnMessage(`${Enemy.name} has been defeated!`);
    return;
  }

  setTimeout(enemyTurn, 2000);
}

function disableButtons() {
  fireBallButton.disabled = true;
  lightningStrikeButton.disabled = true;
  frostBiteButton.disabled = true;
}

function enableButtons() {
  fireBallButton.disabled = Player.moves[0].uses <= 0;
  lightningStrikeButton.disabled = Player.moves[1].uses <= 0;
  frostBiteButton.disabled = Player.moves[2].uses <= 0;
}


function attack(attacker, move, target){
    const moveName = move.move;
    const moveDamage = move.damage;
    console.log(`${attacker.name} used ${moveName}!`);

    move.uses --;
    updateMoveButtons();


    target.health -= moveDamage;
    console.log(Enemy.health);

    if (target.health < 0) target.health = 0;
    showTurnMessage(`${attacker.name} used ${moveName}! (-${moveDamage} HP)`);
    updateHealthDisplay();
 
}

function updateHealthDisplay() {
    playerHealth.textContent = `Health: ${Player.health}`;
    enemyHealth.textContent = `Health: ${Enemy.health}`;
}

function showTurnMessage(message) {
  moveTurn.textContent = message;
}

function updateMoveButtons() {
  fireBallButton.textContent = `Fire Ball (${Player.moves[0].uses})`;
  lightningStrikeButton.textContent = `Lightning Strike (${Player.moves[1].uses})`;
  frostBiteButton.textContent = `Frost Bite (${Player.moves[2].uses})`;

  if(Player.moves[1].uses <=0){
    lightningStrikeButton.disabled = true;
  }

   if(Player.moves[0].uses <=0){
    fireBallButton.disabled = true;
  }

  if(Player.moves[2].uses <=0){
    fireBallButton.disabled = true;
  }
}

playerName.textContent = Player.name;
enemyName.textContent = Enemy.name;


updateHealthDisplay();
updateMoveButtons();
showTurnMessage(`${Player.name}'s turn! Choose your move.`);


fireBallButton.addEventListener('click',()=> playerTurn(0));
lightningStrikeButton.addEventListener('click',()=> playerTurn(1));
frostBiteButton.addEventListener('click',()=> playerTurn(2));