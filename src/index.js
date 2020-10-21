module.exports = function reverse (n) {
    let num = Math.abs(n);
    let numStr = num.toString();
    const numArr = numStr.split('');
    const reverseArr = numArr.reverse();
    let reverseString = reverseArr.toString();
    let reverseStr = reverseString.replace(/,/g, '');
    let result = +reverseStr;
  return (result);
}
