function addDuplicateNumber(number, array) {
    array.push(number);
    array.push(number);
    return array;
  }
  
  // 예시:
  var number = 2;
  var array = [];
  var result = addDuplicateNumber(number, array);
  console.log(result); // [2, 2]