module.exports = function transform(arr) {

  if (!Array.isArray(arr)) throw new Error();
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--double-prev':
        if (arr[i - 1] !== undefined) {
          result.push(arr[i - 1]);
        }
        break;

      case '--double-next':
        if (arr[i + 1] !== undefined) {
          result.push(arr[i + 1]);
        }
        break;

      case '--discard-next':
        if (arr[i + 1] !== undefined) {
          i++;
        }
        break;

      case '--discard-prev':
        if (arr[i - 1] !== undefined) {
          result.pop();
        }
        break;

      default:
        result.push(arr[i]);
    }
  }
  return result;
};
