// join, concat
// join array -> string
const data = [100,200,300]

console.log(data);

const result = data.join()
const result2 = data.join('|')
console.log(result); //100,200,300
console.log(result2); //100|200|300

// concat
const data1 = [100,200,300]
const data2 = [400,500]
const alldata = data1.concat(data2)
console.log(alldata); //[ 100, 200, 300, 400, 500 ]