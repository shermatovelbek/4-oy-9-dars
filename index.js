//1-masala

// let array = [
//   {
//     name:"john",
//     age:34,
//   },
//   {
//     name: "adam",
//     age : 15
//   },
//   {
//     name:"doe",
//     age:21,
//   },
//   {
//     name:"john",
//     age:76,
//   }
//   ];
//   let sum = 1;
//   for(let i = 0; i < array.length ; i++){
//     sum = sum * array[i].age
//   }
//   console.log(sum);

//2-masala

// let arr = [
// {
//   name:"john",
//   age:34,
// },
// {
//   name: "adam",
//   age : 15
// },
// {
//   name:"doe",
//   age:21,
// },
// {
//   name:"john",
//   age:76,
// }
// ];
// let sum = [];
// for(let i = 0; i < arr.length ; i++){
//   if(arr[i].age > 25){
// console.log(arr[i])
//   }
// };

//3-masala

// let array = [
//   {
//     name:"john",
//     age:34,
//   },
//   {
//     name: "adam",
//     age : 15
//   },
//   {
//     name:"doe",
//     age:21,
//   },
//   {
//     name:"john",
//     age:76,
//   }
//   ];
// function age(array){
//   let sum = 0;
//   for(let i = 0; i < array.length;i++){
//     sum += array[i].age;
//   }
//   return sum / array.length;
// };
// let count = age(array);
// console.log(" Bu yerdagi o'rtacha yosh" , count);

//4-masala

// let array = [
//   {
//     name: "john",
//     age: 34,
//   },
//   {
//     name: "adam",
//     age: 15,
//   },
//   {
//     name: "doe",
//     age: 21,
//   },
//   {
//     name: "john",
//     age: 76,
//   }
// ];

// function info(human) {
//   let sum = human[0];
//   for (let i = 1; i < human.length; i++) {
//     if (human[i].age > sum.age) {
//       sum = human[i];
//     }
//   }
//   return sum;
// }

// console.log(info(array));

//5-masala

// function func(arr) {
//   return arr.map((numbers) => {
//     if (numbers % 2 === 1) {
//       return numbers * numbers;
//     } else {
//       return numbers * numbers * numbers;
//     }
//   });
// }

// let all = [1, 2, 3, 4];
// let func = func(all);
// console.log(func);
