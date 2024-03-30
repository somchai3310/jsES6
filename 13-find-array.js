// ค้นหาข้อมูลใน Array
// indexOf ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าไม่เจอจะเป็น -1
// find ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
// findIndex ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const colors = ['red','green','bule','black','white']

const index = colors.indexOf('white')
console.log(index);

const search = colors.find(e => e ==='white')
console.log(search);

const searchIndex = colors.findIndex(e => e == 'white')
console.log(searchIndex);