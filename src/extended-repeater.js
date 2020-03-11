module.exports =   function repeater(str,  {   //to use defaults used destructuring
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1, // to have base
    additionSeparator = '|'
  } = {}) { // default params

  if (typeof str !== 'string') str = str + '';
  if (typeof addition !== 'string') addition = addition + ''; //[object Object],// if toString [object Null] [object Undefined]
  let result = '';
  for( let i = repeatTimes; i > 0; i--) {
    result += str;  // !+
    for( let i = additionRepeatTimes; i > 0; i--) {
       result += addition + ( i > 1 ? additionSeparator : '');
    }
    result += ( i > 1 ? separator : '');
  }
  return result;
};
