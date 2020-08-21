// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less



// You can also log multiple values at once like this



// console.log(enemyInfo.length);

var fight = function(enemy){
    while (enemy.health > 0 && playerInfo.health > 0) {
        // ask user if they'd liked to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP to choose.");
        
        // if user picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm user wantes to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");

                // generate random damage value based on player's attack power
                var damage = randomNumber(enemy.attack - 3, enemy.attack);

                playerInfo.health = Math.max(0, playerInfo.health - damage);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );

        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            // award player mony for winning
            playerInfo.money = playerInfo.money + 20;

            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        // generate random damage value based on player's attack power
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }        
    }   
};

// function to start a new game
var startGame = function() {
    for(var i = 0; i < enemyInfo.length; i++){
        if (playerInfo.health > 0) {
            // let user know what round they are in, remember that arrays start at 0 so needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );

            // pick new enemy to fight based on the index of the enemys array
            var pickedEnemyObj = enemyInfo[i];

            // reset enemy.health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);

            // pass the pickedEnemy variable's value into the fight function, where it will assume the value of the enemy parameter
            fight(pickedEnemyObj);
        } else {
            window.alert("You have lost your robot in battle! Game Over!")
            break;
        }

    }
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
    // reset player stats
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;
};

// function end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if(playerInfo.health > 0) {
        window.alert("Great job you've survived the game! You now have a score of " +playerInfo.money + ".");
    } else {
        window.alert("The game has now ended. Let's see how you did!");
    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// function to generate a random numeric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
  ];
// start the game when the page loads
startGame();
