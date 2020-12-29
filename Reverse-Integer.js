/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let rev = Number(Math.abs(x).toString().split('').reverse().join(''));
  if (rev > Math.pow(2, 31)){
    return 0;
  }
  return rev * Math.sign(x);
};


console.log(reverse(1234));


console.log(reverse(-123));
