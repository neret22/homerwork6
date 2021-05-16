//// comparator
// array.splice(1,2 'apple') will show 0 index element, cut from 1 index element two element, will show rest of array and and new element
// array.slice(1,2) will show 1 index element or array.slice(3) will show everything starting from 3rd index element
// array.findOf('A')
// array.forEach(ele => { ele.toUpperCase()}) doesn't change array
// array.map( ele => {ele +=1})    chgange array it self

////////
// array.filter( u => u.age > 50) filter according condition
// array.filter ( ur => ur % 2 === 0)
///+1//
//////////

// array.findIndex(() => {})
/* let idx = users.findIndex( usr => usr.age === 25)
if ( idx !== -1) {
    console.log(users[idx])
}
console.log(idx) */

/* const arr = new Array(arrayLength: 10);
arr.fill(value: 'cats');
console.log(arr); // columns
console.table(arr); //table
 */

// array.reduce(() => {})
/* let result = users.reduce((acc, user) => {return acc += user.money}, 0);
console.log(result); */




 ////////СALL BACK FUNCTION//////


 function sayHello(){
     return 'Hello';
 } 

 function sayBye(){
     return 'Bye'
 }

 function greeting(cbk){
     console.log(cbk() + 'Ivan')
 }

 greeting( sayHello)  /// we say which function has to be called later the sentence greeting(sayHello()) this function will be called automatically
 greeting( sayBye )


 fruits.fill(value: 'none', start: 4)
 console.log(fruits);
 let idx = fruits.indexOf('none');
 if (idx !== -1){
     fruits[idx] = 'lime'
 } 
 console.log(fruits);
 fruits.forEach((ele, idx) => {
     if ( ele === 'none')
     fruits[idx] = 'kiwi'
 })
console.log(fruits)


let str = 'Vsem privet';
console.log(str.split(' ').join('_'))// separator with blank space and join with underscore
console.log(str.split('') // separate each letter
console.log(str.split(' ').join('').split('').join(':-)'))



const name = 'Ivan'; 
console.log(`Hello ${name}`);
console.log('Hello '+ name);

console.log(Object.keys(person))

console.log(Object.values(person))








