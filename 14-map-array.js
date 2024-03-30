// array map

const numbers = [10,20,30,40]

const result = numbers.map(e => {
    // เวลาใส่ {} หลัง arrow function ต้องมี return
    const a = e*2
    return a
})
const result2 = numbers.map(e => e*2)

console.log(numbers); //[ 10, 20, 30, 40 ]
console.log(result);  //[ 20, 40, 60, 80 ]
console.log(result2); //[ 20, 40, 60, 80 ]

const data = ['ฝนตก','แดดร้อน','ฝนฟ้าคะนอง','แดดร้อน','ฝนตก','อากาศดี','หมอก']

const resultW = data.map((e,i)=> {
    return `วันที่ ${i+1} , สภาพอากาศ = ${e}`
})

console.log(resultW);
/* 
[
  'วันที่ 1 , สภาพอากาศ = ฝนตก',
  'วันที่ 2 , สภาพอากาศ = แดดร้อน',
  'วันที่ 3 , สภาพอากาศ = ฝนฟ้าคะนอง',
  'วันที่ 4 , สภาพอากาศ = แดดร้อน',
  'วันที่ 5 , สภาพอากาศ = ฝนตก',
  'วันที่ 6 , สภาพอากาศ = อากาศดี',
  'วันที่ 7 , สภาพอากาศ = หมอก'
]
*/

const data2 = [
    {day:'01/06/2564',weather:'แดดร้อน',tem:27},
    {day:'02/06/2564',weather:'ฝนตก',tem:23},
    {day:'03/06/2564',weather:'มีหมอก',tem:18},
]

console.log(data2);
const resultWeather = data2.map(e => e.weather)
console.log(resultWeather);
//[ 'แดดร้อน', 'ฝนตก', 'มีหมอก' ]