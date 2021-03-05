module.exports = function check(str, bracketsConfig) {
  let isCheck = true;

  do {
    isCheck = false;

    for (let i = 0; i < bracketsConfig.length; i++) {
      let one= bracketsConfig[i].join('');
        if (str.indexOf(one)  !== -1) {
            str = str.slice(0, str.indexOf(one)) + str.slice(str.indexOf(one) + 2); //вырезаем найденную пару скобок
            isCheck = true;
        } 
    }
  } while (isCheck);

  return str.length === 0;
}
