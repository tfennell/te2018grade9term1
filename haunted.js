const READLINE = require("readline-sync");

let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "fists",
  item: "flashlight",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
console.log(" Fair warning, you're going to die. Enjoy!")
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of an old, grimy house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);

let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") 
{
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door.`);
} 
else 
{
player.intellect++;
console.log("You decide not to open the door. However, a strong burst of wind pushes the door open, and faint visions of your family compel you to enter");
}
console.log(`${player.name} walks through hallway and sees two rooms (the kitchen and the entryway towards the basement)`);

let enterKB = READLINE.question("Will you enter the kitchen or basement?");

if(enterKB == "kitchen") {console.log(`${player.name} continues into the kitchen, and inhales a pungent odor`);
}
else
{
console.log("You walk into the basement and as your eyes adjust to the darkness, you see a silver object cut through the air towards you.");
}

player.item = READLINE.question(" Will you turn on your flashlight?");
if (player.item == "yes") {console.log (" You see a ghastly sight of mutilated bodies, and decapitated heads. You look up to see a menacing glare. In a swift mption you fall to the ground in pain.");
}
else 
{
console.log("You walk until you slip and skid against the floor, creating a loud CRASH in the process. You walk into the basement and as your eyes adjust to the darkness you see a sliver cut through the air towards   you. You feel a sharp pain and drop to the ground. An immense weight falls on your shoulders, you hear a soft chuckle that becomes a high pitched shreik.");
}
console.log("You're Dead! Thanks for playing!");
