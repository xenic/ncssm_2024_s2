const STUDENTS = 
  "sydney" +
  "alex" +
  "maddy" +
  "piper" +
  "natasha" +
  "chandler" +
  "anjali" +
  "claire" +
  "franklin" +
  "john" +
  "nick" +
  "jiah" +
  "kennedy";

const STUDENT_LIST = [
  "sydney",
  "alex",
  "maddy",
  "piper",
  "natasha",
  "chandler",
  "anjali",
  "claire",
  "franklin",
  "john",
  "nick",
  "jiah",
  "kennedy"
]

function main() {
  activity1();
}

function activity1() {
  /* generate 2 random numbers, store them in variables, then
     inject into a string. */
  let a = Math.random();
  let b = Math.random();
  let injStr = `This is a string, my first number is ${a}, and the second is ${b}.`
  console.log(injStr);
}

function strings() {

}



function hOrT() {
  let guess = prompt("heads or tails?");
  while (guess !== "heads" || guess !== "tails"){
    guess = prompt("heads or tails?");
  }
  let flip = Math.random();
  if (flip > .5) {
    console.log("it was Heads");
  }
  else {
    console.log("it was Tails");
  }
  if ((flip > .5 && guess.toLowerCase() === "heads") || (flip <= .5 && guess.toLowerCase() === "tails")) {
    console.log("you got it right"); 
  }
  else {
    console.log("you got it wrong");
  }
}