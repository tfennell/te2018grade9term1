const READLINE = require("readline-sync");

// **** Problem 1: print a message ****
 //Write a function that prints any message you want. Then call it to see if it works.
function sayQween(){
  console.log("Qween");
}
sayQween();








// **** Problem 2: print a message 5 times ****
// Write a function that calls the print message function five times. Then call it to see if it works.









// **** Problem 3:
/******************************************************************************
// Write a function that asks the user if they'd like to print your message
// once or five times. Then call one of the two functions above based on
// what the user decides.
// **** Problem 4:
/******************************************************************************
                          parrotTrouble(talking, hour)
Instructions:
We have a loud talking parrot. The "talking" parameter is a boolean that
represents if the parrot is talking. The "hour" parameter is the current hour
time in the range 0..23. We are in trouble if the parrot is talking and the hour
is before 7 or after 20. Return true if we are in trouble.
Examples:
parrotTrouble(true, 6) → true
parrotTrouble(true, 7) → false
parrotTrouble(false, 6) → false
*******************************************************************************/



// Remove comment below to test this function.
//testParrotTrouble();









**** Problem 5:
******************************************************************************
                             alarmClock(day, vacation)
Instructions:
Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean
indicating if we are on vacation, return a string of the form "7:00" indicating
when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on
the weekend it should be "10:00". Unless we are on vacation -- then on weekdays
it should be "10:00" and weekends it should be "off".
Examples:
alarmClock(1, false) → "7:00"
alarmClock(6, true) → "off"
alarmClock(0, false) → "10:00"
*******************************************************************************/



// Remove comment below to test this function.
//testAlarmClock();

/****************************************************************************
                                    Tests
*****************************************************************************/



function testParrotTrouble() {
  console.log();
  console.log("parrotTrouble(true, 6) → true " + parrotTrouble(true, 6));
  console.log("parrotTrouble(true, 7) → false " + parrotTrouble(true, 7));
  console.log("parrotTrouble(false, 6) → false " + parrotTrouble(false, 6));
  console.log("parrotTrouble(true, 21) → true " + parrotTrouble(true, 21));
  console.log("parrotTrouble(false, 21) → false " + parrotTrouble(false, 21));
  console.log("parrotTrouble(false, 20) → false " + parrotTrouble(false, 20));
  console.log("parrotTrouble(true, 23) → true " + parrotTrouble(true, 23));
  console.log("parrotTrouble(false, 23) → false " + parrotTrouble(false, 23));
  console.log("parrotTrouble(true, 20) → false " + parrotTrouble(true, 20));
  console.log("parrotTrouble(false, 12) → false " + parrotTrouble(false, 12));
}

function testAlarmClock() {
  console.log();
  console.log("alarmClock(1, false) → \"7:00\" " + "\"" + alarmClock(1, false) + "\"");
  console.log("alarmClock(5, false) → \"7:00\" " + "\"" + alarmClock(5, false) + "\"");
  console.log("alarmClock(0, false) → \"10:00\" " + "\"" + alarmClock(0, false) + "\"");
  console.log("alarmClock(6, false) → \"10:00\" " + "\"" + alarmClock(6, false) + "\"");
  console.log("alarmClock(0, true) → \"off\" " + "\"" + alarmClock(0, true) + "\"");
  console.log("alarmClock(6, true) → \"off\" " + "\"" + alarmClock(6, true) + "\"");
  console.log("alarmClock(1, true) → \"10:00\" "	+ "\"" + alarmClock(1, true) + "\"");
  console.log("alarmClock(3, true) → \"10:00\" " + "\"" + alarmClock(3, true) +"\"");
  console.log("alarmClock(5, true) → \"10:00\" " + "\"" + alarmClock(5, true) + "\"");