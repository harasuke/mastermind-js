class Bit {
  //❗️❕⚪️⚫️
  constructor(val){
    this.value = val;
    this.checked = false;
  }
}


class Game {
  #secretSequence

  constructor() {
    //this.charList = ["🔴","🟠","🟡","🟢","🔵","🟣",'⚫️',"⚪","🟤"];
    this.charList = [
      new Bit('a'),new Bit('s'),new Bit('d'),new Bit('f'),new Bit('g'),new Bit('h'),new Bit('j'),new Bit('k'),new Bit('l')
    ];
    this.charCheck = [new Bit("❕"),new Bit("❗️")];
    this.attempt = 0;
    this.maxAttempt = 10;

    this.#secretSequence = [
      this.charList[Math.floor(Math.random() * this.charList.length)],
      this.charList[Math.floor(Math.random() * this.charList.length)],
      this.charList[Math.floor(Math.random() * this.charList.length)],
      this.charList[Math.floor(Math.random() * this.charList.length)]
    ]
  }

  analyzeSequence(sequence) {
    let _sequence = sequence.split('');
    let analyzedResult = [];

    console.log(this.#secretSequence);
    
    
    let cont = 0;
    let isOK = false;
    for (let i=_sequence.length-1; i>=0; i--) {
      //cont = isOK ? i : 0
      isOK = false
      while(cont <= this.#secretSequence.length-1 && !isOK) {
        if(!this.#secretSequence[cont].checked){
          if (_sequence[i] == this.#secretSequence[cont].value) {
            isOK = true;
            
            if(i == cont)
              analyzedResult.push(this.getCharCheckCorrect())
            else
              analyzedResult.push(this.getCharCheckWrong())
            this.#secretSequence[cont].checked = true;
          }
        }
        cont++;
      }
    }

    return analyzedResult
  }


  getCharCheckCorrect(){
    return this.charCheck[1].value
  }

  getCharCheckWrong(){
    return this.charCheck[0].value
  }
}

module.exports = {
  Game: Game
}
