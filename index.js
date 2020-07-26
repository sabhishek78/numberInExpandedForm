function expandedForm(num) {
  let res=[];
  let numArr=num.toString().split("").reverse();
  for(let i=0;i<numArr.length;i++){
    res.push(numArr[i]*Math.pow(10,i));
  }
  res.reverse();
  let result='';
  for(let i=0;i<res.length;i++){
    if(res[i]!==0){
     result+=res[i].toString()+' + ';
    }
    }
  return result.slice(0,result.length-3);
}
console.log(expandedForm(12));
console.log(expandedForm(70304));