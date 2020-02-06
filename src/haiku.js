export class Haiku {
  constructor(lineOne, lineTwo, lineThree) {
    this.lineOne = lineOne,
    this.lineTwo = lineTwo,
    this.lineThree = lineThree
  }

  syllables(word) {
    word = word.toLowerCase();
    if(word.length <= 3) { return 1; }
      return word.replace(/(?:[^laeiouy]es|ed|lle|[^laeiouy]e)$/, '')
                 .replace(/^y/, '')
                 .match(/[aeiouy]{1,2}/g).length;
  }

  checkline(sentence) {
    let count = 0;
    let words = sentence.split(" ");
    
    words.map(function(val, key){
      count += syllables(val)
    });
    return count;
  }

  haiku(a, b, c){
    if(!a || !b || !c){
      return {result: false, error: "Invalid input. Call haiku(line1, line2, line3)"}
    }
    result = [checkLine(a), checkLine(b), checkLine(c)];
    expected = [5, 7, 5];
    if(arrayCompare(result, expected)){
      return true;
    }
    return {result: false, syllables:result};
  }

  arrayCompare(a1, a2){
    return a1.length==a2.length && a1.every(function(v,i) { return v === a2[i]})
  }
};