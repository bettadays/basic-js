module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
    const turns = Math.pow(2,disksNumber) - 1;
    const time = turns/(turnsSpeed/3600);
    const answer =  {
      turns: turns,
      seconds: time
    };
    return answer;
}

// const time = turns/turnsSpeed*3600;  gave error for one test case
   //-  "seconds": 1.6502813140731935e+217
  //+  "seconds": 1.6502813140731933e+217
