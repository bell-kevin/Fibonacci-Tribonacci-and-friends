function Xbonacci(signature,n){
  if (!signature.length) return [];
  
  let arr = [...signature.slice(0, n)];
  const sumLength = signature.length;
  
  while (arr.length < n) {
    let newArr = arr.slice(arr.length - signature.length);
    let sum = newArr.reduce((a,b) => a + b);
    arr.push(sum);
  }
  return arr;
}
