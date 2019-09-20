
String.prototype.obfs = function(key, n = 126) {
  let charArray = this.toString().split('');

  for (let i = 0; i < charArray.length; i++) {
    let c = charArray[i].charCodeAt(0);

    if (c <= n) {
      charArray[i] = String.fromCharCode((charArray[i].charCodeAt(0) + key) % n);
    }
  }

  return charArray.join('');
};

String.prototype.deobfs = function(key, n = 126) {
  return this.toString().obfs(n - key);
};
