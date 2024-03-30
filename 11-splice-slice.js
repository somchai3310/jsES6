// splice, slice
// splice(ตำแหน่งที่จะลบ, จำนวนที่จะลบ )
// splice(ตำแหน่งที่จะลบ, จำนวนที่จะลบ , เพิ่มไปแทนตัวที่ลบ)
// slice(ตำแหน่งเริ่มต้น, ตำแหน่งสุดท้าย-1)


const data = [10,20,30,40,50,60]

console.log(data);
data.splice(1,3) //ลบ 20,30,40
console.log('after splice',data);
// [ 10, 50, 60 ]

data.splice(1,1,999) 
console.log('splice replace',data);

// slice copy ช่วงนั้นมา
const data1 = [10,20,30,40,50,60]
console.log('data1',data1);

console.log('slice(1,3) ',data1.slice(1,3));
// [ 20, 30 ]