block scope
let
constant

arrow function
แบบเดิม
function fullname(fname, lname){
    return fname+lname
}
แบบใหม่
fullname=(fname,lname)=> fname+lname

object
ตัวแปรเก็บข้อมูล

string
multiline string
``
interpolation
${}

spread operator ...
กระจาย array

Rest parameter
ส่ง parameter โดยใช้ ...

Destructuring การสลายโครงสร้าง
กำหนดค่าภายใน array or object ให้กับตัวแปร โดยการจับคู่ตัวแปรกับค่าใน array or object 
const colors = ['red','white']
const a = colors[0]
const b = colors[1]
การใช้
const colors = ['red','white']
const [a,b] = colors

Default Parameter
ถ้าไม่ได้ส่งมา จพกำหนดค่าให้

join , concat
join array -> string ไม่กระทบ array เดิม

push, pop ,shift ,unshift
push เพิ่มจากหลังสุด
pop ลบจากหลังสุด
shift ลบจากหน้าสุด
unshift เพิ่มจากหน้าสุด

splice, slice
splice(ตำแหน่งที่จะลบ, จำนวนที่จะลบ)
slice(ตำแหน่งเริ่มต้น, ตำแหน่งสุดท้าย-1)

Loop Array
// For Loop, ForEach, ForOf

ค้นหาข้อมูลใน Array
indexOf ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าไม่เจอจะเป็น -1
find ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
findIndex ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

Array Map
