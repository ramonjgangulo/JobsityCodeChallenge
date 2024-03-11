export function mapObject(obj, iteratee) {
  let _keys = Object.keys(obj),
    length = _keys.length,
    results = [];
  let currentKey;
  for (let index = 0; index < length; index++) {
    currentKey = _keys[index];
    results.push(iteratee(obj[currentKey], currentKey, obj))
  }
  return results;
}


export function removeTags(str) {
  if ((str === null) || (str === ''))
    return false;
  else
    str = str.toString();

  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.
  return str.replace(/(<([^>]+)>)/ig, '');
}
