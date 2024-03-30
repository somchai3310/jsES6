// arrow function

// old
function fullname(fname,lname) {
    return fname+lname
}
fullname('somchai','hahaha')

// new
fullnameArrow=(fname,lname) => fname+' '+lname
setAge=(age)=> 'อายุ '+age

console.log(fullnameArrow('somchai','arrow'));
console.log(setAge(20));