// spread operator ...

const newArr = [100,200,300];
const data = [10,20];

const mix = [...data , ...newArr]
const mix2 =[]
mix2.push(...data, ...newArr)
console.log('mix -->',mix); //[ 10, 20, 100, 200, 300 ]
console.log('mix2 -->',mix2); //[ 10, 20, 100, 200, 300 ]
