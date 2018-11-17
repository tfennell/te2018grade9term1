const READLINE = require("readline-sync");
let preparedness = READLINE.question("Did you prepare for school tomorrow");
if(preparedness=="yes")
{
	console.log("Good Job");
}
else{
	console.log("Please, get your stuff ready for school");
}

let hw = READLINE.question("Did you finish your homework?");
if(hw == "yes"){ 
	console.log("Awesome");
}
else
{
console.log("Get to it!");
}

let location = READLINE.question("Are you on your way home?");
if (location == "On the train")
{
console.log("Ok, get home safe.");
}
else
{
console.log("Come home soon.");
}
