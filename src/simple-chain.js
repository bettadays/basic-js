chainMaker = {
  arr: [],

  getLength() {
     return  this.arr.length;
  },

  addLink(value) {  // adds only one link, no need in loop
    this.arr.push( `( ${value} )`);
    return this;  //to make it chainable
  },

  removeLink(position) {
    if (position < 1 || isNaN(position) || position > this.getLength() || position % 1 > 0) {
      this.arr = []
      throw new Error();
    }
    this.arr.splice(position-1,1);
    return this;
  },

  reverseChain() {
    this.arr = this.arr.reverse();
   return this;
  },

  finishChain() {
    let string  = this.arr.join('~~'); // save to return after cleaning the chain
    this.arr = [];
    return string;
  }
};

module.exports = chainMaker;

