class VigenereCipheringMachine {

  constructor(choice) {
    this.userChoice = choice === false ? 'reversed' : 'direct';
    this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //could be a string
  }

  equalLength(string, key) {
    let lengthDifRatio = Math.ceil(string.length / key.length);
    let keyBase = key;
    if (lengthDifRatio > 1) {
      for (let i = 0; i < lengthDifRatio; i++) {
        key = key.concat(keyBase);
      }
    }
    return key;
  }

  encryptOrDecrypt(string, key, mode) {
    if (string === undefined || key === undefined) throw new Error();
    string = string.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    key = this.equalLength(string, key);
    let j = 0; // to ensure that non-letters from string won't "consume" key symbols
    for (let i = 0; i < string.length; i++) {
      let stringLetterIndex = this.alphabet.indexOf(string[i]);
      if (stringLetterIndex === -1) {
        result = result.concat(string[i]);
        continue;
      }
      let keyLetterIndex = this.alphabet.indexOf(key[j]);
      j++;
      let cryptedLetterIndex;

      if (mode === true) {
        cryptedLetterIndex = (stringLetterIndex + keyLetterIndex) % 26;
      } else {
        cryptedLetterIndex = (stringLetterIndex + 26 - keyLetterIndex) % 26;
      }
      let cryptedLetter = this.alphabet[cryptedLetterIndex];
      result = result.concat(cryptedLetter);
    }
    if (this.userChoice === 'reversed') {
      result = result.split("").reverse().join("");
    }
    return result
  }

  encrypt(string, key) {
    return this.encryptOrDecrypt(string, key, true);
  }
  decrypt(string, key) {
    return this.encryptOrDecrypt(string, key, false);
  }
}

module.exports = VigenereCipheringMachine;
