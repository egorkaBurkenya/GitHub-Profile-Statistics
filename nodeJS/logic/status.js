function getKyes(obj) {

  let keys = [];

  for (i in obj) {
    let obj_keys = Object.keys(obj[i]);
    for (i in obj_keys) {
      if (keys.includes(obj_keys[i])) {
      } else {
        keys.push(obj_keys[i]);
      }
    }
  }
  return keys
}

function create_new_obj(old_obj) {

  let keys = getKyes(old_obj)
  let new_obj = {}
  
  for (let i in old_obj) {
    for (let j in keys) {
      if (Object.keys(new_obj).includes(keys[j])) {
        if (old_obj[i][keys[j]]) { 
          new_obj[keys[j]] += old_obj[i][keys[j]]
        }
      } else { 
        if (old_obj[i][keys[j]]) { 
          new_obj[keys[j]] = old_obj[i][keys[j]]
        }
      }
    }
  }
  return new_obj 
}

function status(obj) {
  obj = create_new_obj(obj)
  let all = 0
  for (i in obj) { all += obj[i] }
  for (i in obj) { obj[i] = obj[i] / (all / 100) }
  console.log(obj);
  return(obj)
}

module.exports = status