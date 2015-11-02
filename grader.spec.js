var grader = require('./grader');

describe('Grader', function(){
  it('returns the letter grade', function(){
    expect(grader.letterGrader(100)).toEqual('A+');
    expect(grader.letterGrader(95)).toEqual('A');
    expect(grader.letterGrader(90)).toEqual('A-');
    expect(grader.letterGrader(88)).toEqual('B+');
    expect(grader.letterGrader(85)).toEqual('B');
    expect(grader.letterGrader(80)).toEqual('B-');
    expect(grader.letterGrader(78)).toEqual('C+');
    expect(grader.letterGrader(75)).toEqual('C');
    expect(grader.letterGrader(70)).toEqual('C-');
    expect(grader.letterGrader(68)).toEqual('D+');
    expect(grader.letterGrader(65)).toEqual('D');
    expect(grader.letterGrader(60)).toEqual('D-');
    expect(grader.letterGrader(4)).toEqual('F');
  });

  it('returns the average score', function(){
    expect(grader.averageScore([100, 90, 80, 70, 60, 50])).toEqual(75);
    expect(grader.averageScore([10])).toEqual(10);
    expect(grader.averageScore([10, 10, 10, 10, 10])).toEqual(10);
    expect(grader.averageScore([20, 30, 25, 35, 15])).toEqual(25);
    expect(grader.averageScore([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(5);
    expect(grader.averageScore([2, 5, 3, 4, 5, 3, 6])).toEqual(4);
  });

  it('returns the median score (odd number of scores)', function(){
    expect(grader.medianScore([77, 88, 47, 63, 99, 88, 32, 74, 100])).toEqual(77);
    expect(grader.medianScore([10])).toEqual(10);
    expect(grader.medianScore([1, 4, 5, 6, 7, 8, 100])).toEqual(6);
    expect(grader.medianScore([10, 20, 30, 40, 50])).toEqual(30);
  });

  it('returns the median score (even number of scores)', function(){
    expect(grader.medianScore([1, 77, 88, 47, 63, 99, 88, 32, 74, 100])).toEqual(75.5);
    expect(grader.medianScore([10, 10])).toEqual(10);
    expect(grader.medianScore([10, 20])).toEqual(15);
    expect(grader.medianScore([10, 10, 30, 40, 50, 60])).toEqual(35);
    expect(grader.medianScore([1, 1, 2, 3, 4, 5, 6, 7])).toEqual(3.5);
  });

  it('returns the mode of the scores', function(){
    expect(grader.modeScore([1, 5, 8, 8, 4, 3])).toEqual(8);
    expect(grader.modeScore([1])).toEqual(1);
    expect(grader.modeScore([2, 3, 4, 5, 5, 5, 5, 5, 5])).toEqual(5);
    expect(grader.modeScore([3, 4, 3, 4, 4, 3, 3, 3])).toEqual(3);
    expect(grader.modeScore([1, 4, 3, 10, 80, 20, 30, 10])).toEqual(10);
  });
});
