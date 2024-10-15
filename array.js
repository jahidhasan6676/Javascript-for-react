// length, index, push, pop, indexOf, includes, shift, unshift, join, reduce.
// let array = [23, 34, 54, 67, 89];

// shipt and unshift used--->
// array.unshift(100);
// array.shift();
// array.shift();
// console.log(array)

// indexOf--->
// const index = array.indexOf(89);
// console.log(index)

// push and pop-->
// array.push(100);
// array.pop()
// array.pop()
// console.log(array)

// index test--->
// array[2] = 90;
// console.log(array)

// length test--->
// const length = array.length;
// console.log(length)

// includes--->
// const numbers = [2, 34, 54, 67];
// const include = numbers.includes(0)
// console.log(include)
// const friends = ['jahid', 'hasan', 'tasmim', 'alo', 'tomato'];
// const check = friends.includes('hasan')
// console.log(check)

// join--->
// console.log(friends.join(' + '))

// reduce--->
// const friends = [23, 45, 66, 76];
// const reduce = friends.reduce((previous, current)=> previous + current, 0);
// console.log(reduce)
// const numbers = [5, 5, 10, 20];

// const add = numbers.reduce((previous, current) => previous*current);
// console.log(add)

// const nestedArray = [[1, 2], [3, 4], [5, 6]]
// const reduceArray = nestedArray.reduce((previous, current)=>{
//     return previous.concat(current)
// }, [])
// console.log(reduceArray)


// const numbers = [23, 45, 66, 76, 55, 99];
// // const slice = numbers.slice(2,4);
// // console.log(slice)

// const splice = numbers.splice(2,3);
// console.log(numbers)
// console.log(splice)


// array destructuring--->

// const array = [23, 34, 45, 67, 78];
// const [, ,balance, ...law] = array;
// console.log(balance, law)

// const person = {
//     name: 'jahid',
//     age: 21,
//     school: 'govt. collage',
//     subject: 'Accounting'
// }




// const {name, age:boyos} = person;
// console.log(name, boyos)


const products = [
    {name: 'mobile', brand: 'iphone', price: 10000},
    {name: 'laptop', brand: 'lenovo', price: 20000},
    {name: 'mouse', brand: 'ph', price: 30000},
    {name: 'car', brand: 'walton', price: 14000},
    {name: 'tablet', brand: 'hp', price: 10600},
];

const find = products.find(p => p.price <= 20000);
console.log(find)

// const filter = products.filter(p => p.price <= 20000);
// console.log(filter)

// const forEach = products.forEach(f => console.log(f.name) );
// console.log(forEach)

// const map = products.map(p => p.brand);
// console.log(map)