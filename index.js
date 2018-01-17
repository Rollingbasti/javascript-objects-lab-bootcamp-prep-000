var recipes = {};

function updateObjectWithKeyAndValue(object,key,val){
  var newObj = Object.assign({}, object, { [key]: val });
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  return Object.assign({}, object, { [key]: value});
}