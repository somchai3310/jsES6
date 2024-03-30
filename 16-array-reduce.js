// Array Reduce
// array.reduce((ค่าที่ถูกประมวลผล,e) =>{},ค่าเริ่มต้น)
// ค่าที่ถูกประมวลผล มาจาก ค่าเริ่มต้น
const data = [10,20,30,40]

// map
const mapData = data.map(e=>100)
console.log(mapData);
// [ 100, 100, 100, 100 ]

// filter
const filterData = data.filter(e=>e>20)
console.log(filterData);
// [ 30, 40 ]

// reduce
const reduceData = data.reduce((value,e,i) =>{
    console.log('v',i+1 ,value);
    console.log('e',i+1 ,e);
    const total = e+value
    console.log('t',i+1 ,total);
    return total
},0)

console.log('reduceData ',reduceData);

const cart = [
    {name:'bag', price:500},
    {name:'book', price:900},
    {name:'camera', price:5000},
]

const sum = cart.reduce((value,e) => {
    const total = e.price+value
    return total
},0)
// const sum = cart.reduce((value,e) => e.price+value,0)

console.log(sum);