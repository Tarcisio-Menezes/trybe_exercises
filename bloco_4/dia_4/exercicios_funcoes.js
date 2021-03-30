  function palindrome (word) {
  let direction = '';
  let reverse = '';
  let answer = false;
  
  for (let index = 0; index < word.length; index +=1) {
   direction += word[index];
  }

  for (let index2 = word.length -1; index2 >= 0; index2-=1) {
    reverse += word[index2];
  }

  if (direction === reverse) {
    answer = true;
  }

  return answer;
}

console.log(palindrome('arara'));

