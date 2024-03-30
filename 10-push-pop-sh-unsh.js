// push, pop ด้านหลัง
// shift, unshift ด้านหน้า
const data =[10,20,30]
console.log(data); //[ 10, 20, 30 ]

data.push(1100)
data.push(...[500,100,200])
console.log(data); 
//[10,  20,  30, 500, 1100, 100, 200]
    
data.pop() //ลบตัวท้ายสุด
console.log('after pop ',data); 
//[ 10, 20, 30, 1100, 500, 100 ]

data.shift() //ลบตัวหน้าสุด
console.log('after shift', data); 
//[ 20, 30, 1100, 500, 100 ]

data.unshift(999)
console.log('after unshift', data);
//[ 999, 20, 30, 1100, 500, 100 ]