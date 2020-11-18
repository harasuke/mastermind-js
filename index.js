var game = require('./game.js')
var Game = new game.Game()

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("close", function() {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});

(function input(){
  if(Game.attempt <= 10)
    rl.question(`Guess the sequence ${Game.attempt}/${Game.maxAttempt}\n`, function(givenSequence) {
      Game.attempt += 1
      console.log(Game.analyzeSequence(givenSequence));
      input()
    });
  else{
    rl.close()
    console.log('Ops')
  }
})()