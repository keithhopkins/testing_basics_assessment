(function() {
  'use strict';

  function letterGrader(grade){
    switch(true){
      case grade >= 97: return 'A+';
      case grade >= 93: return 'A';
      case grade >= 90: return 'A-';
      case grade >= 87: return 'B+';
      case grade >= 83: return 'B';
      case grade >= 80: return 'B-';
      case grade >= 77: return 'C+';
      case grade >= 73: return 'C';
      case grade >= 70: return 'C-';
      case grade >= 67: return 'D+';
      case grade >= 63: return 'D';
      case grade >= 60: return 'D-';
      default: return 'F';
    }
  }

  function averageScore(scores){
    return (scores.reduce(function(a, b){
      return a+b;
    }))/scores.length;
  }

  function medianScore(scores){
    scores = scores.sort(function(a,b){ return a-b;});
    if(scores.length % 2 === 0){
      return (scores[scores.length/2]
        + scores[scores.length/2-1])/2;
    } else {
      return scores[scores.length/2-.5];
    }
  }

  function modeScore(scores){
    var count = {};
    var modeScore = scores[0];
    for(var i=0; i<scores.length; i++){
      if(count[scores[i]]){
        count[scores[i]]++;
        if(count[modeScore] < count[scores[i]]){
          modeScore = scores[i];
        }
      } else {
        count[scores[i]] = 1;
      }
    }
    return modeScore;
  }

  module.exports = {
    letterGrader: letterGrader,
    averageScore: averageScore,
    medianScore: medianScore,
    modeScore: modeScore
  };


})();
