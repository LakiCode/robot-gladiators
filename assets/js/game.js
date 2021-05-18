// this was my first java code
// window.alert ("This is an alert! JavaSript is running!")
// now is time to move to something more intresting! ;-)

// Promt for robot name
// window.prompt ("What is your robot's name?");
/*

//window.alert (playerName);
// use cosole log to log input
console.log ("This logs a string, good as testing to leave message to your self");
//this can do math
console.log(10+20);
// This will write robot's name in sonsole
console.log("My robot's name is " + playerName);
// create new var
var name = "your name";
*/

//from page 3.1.6
//use same script from above and create varible
var playerName = window.prompt ("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 12;
// log multyple values at once like this:
console.log(playerName, playerHealth, playerAttack);
// crate var's for enemy robot
var enemyName = "Roborto";
var enemyHealth = 120;
var enemyAttack = 12;

//this create a fuction named "fight"
var fight = function () {
    // Alert players that they are starting round
    window.alert ("Welcome to Robot Gladiators!");
    //Promt player for fight
    var promptFight = window.prompt("Would you like to FIGHT or to SKIP this batttle? Enter 'FIGHT' or 'SKIP' to choose");
    alert ("you select to " + promptFight);
    if (promptFight === "FIGHT" || promptFight === "fight") {

    // Substract the value of 'playerAttack' from the value 'enemyHealth' and use that result to update in the 'enemyHealth' variable
        
    enemyHealth = (enemyHealth - playerAttack);

    //log a resulting message to the cososle so we know that is worked.
    console.log ("Roborto health status: " + enemyHealth);
    // check enemy healt status
    if (enemyHealth <= 0) {
        alert (enemyName + " has died!");
    }
    else {
        alert (enemyName + " still has: " + enemyHealth + " health left.");
    }
    // Substract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealt' variable.
      playerHealth = (playerHealth - enemyAttack);
    //Lpg a resulting message to the console so we know that it worked.
        console.log ( playerName + " Health status is:" + playerHealth);
    //check player helth
    if (playerHealth <= 0) {
        alert (playerName + " has died!");
    }
    else {
        alert(playerName + " still has "+ playerHealth + " health left!");
    }
    // if Player choses to skip battle
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confir that player want to skip
        var confirmSkip = window.confirm ("are you sure you'd like to quit?");
        // if yes leave the fight
        if (confirmSkip) {
            window.alert ("goodbye!");
            //substrack money from player
            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
    window.alert (playerName + " shoose to skip battle!");
    } else {
         window.alert("You need to choose a valid option. Try again!");
     }

};
// execute function
 // fight();