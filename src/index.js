module.exports = function check(str, brackets) {
  
    let checkStr = true;
    while (checkStr) {
      let newStr = str;

      if (brackets[0][0].charCodeAt(0) > 47 && brackets[0][0].charCodeAt(0) < 58) {
          for (let arrBr of brackets) {
              let first = arrBr[0];
              let second = arrBr[1];
              let reg = new RegExp(`${first}` + `${second}`, "g");
              newStr = newStr.replace(reg, '');
          }
      }

      else {
          for (let arrBr of brackets) {
              let first = arrBr[0];
              let second = arrBr[1];
              let reg = new RegExp(`\\${first}` + `\\${second}`, "g");
              newStr = newStr.replace(reg, '');
          }
      }
  
      if (newStr == str) break;
      str = newStr;

  }
  return (str) ? false: true;
}
