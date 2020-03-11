module.exports = function createDreamTeam(members) {
  const result = [];
  if(!Array.isArray(members))  return false;
  // also !members instanceof Array | members.constructor !== Array
  members.forEach(item => {
    if(typeof item === 'string') {  //map with filter could be also used
    item = item.trim().toUpperCase(); //  first to upper case, after sort, but before result arr creation, since its a string method
    result.push(item[0]);
   }
  })
   return result.sort().join('')
};


