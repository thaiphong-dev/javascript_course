// lý thuyết về GIÁ TRỊ  undefined và null
// if else
// loop for loop



// null là kiểu dữ liệu nguyên thủy

// console.log(typeof null);

// null giúp js tương tác với một  ngôn ngữ lập trình khác
// java



// giá trị của kiểu dữ liệu null => null

// null đại diện cho việc tạo một biến
// không trỏ đến bất kì giá trị nào


// object  = {}

// Boolean = false
// number = 0
// string = ''
// array = []


// => đặt một giá trị nói chung là default value => null

// let a = Number()

// console.log(a)


// console.log(undefined === null);


// khi một biến có giá trị là undefined thì biến đó coi như là không tồn tại

// khi một biết là có giá trị null thì biến đó coi như là có giá trị trống



//  ** câu điều kiện

//  if else
// if(A) {

//     làm việc điều kiện đúng
// }
// // else if( B){

// // }
// else {
//     làm điều kiện sai
// }
// -
// if (a > b && a == c && a > d) {
//     console.log(a);

// }

// if (a == b) {
//     console.log(a, b);
// }

// if (a < b) {
//     console.log(b);
// }


// if else

// - tường minh về mặt logic
// - hạn chế chạy đoạn code không cần thiết
// - tối ưu về mặt logic so sánh (tránh xót trường hợp sai)
// //


// //


// //
// 2 => tường minh hơn về mặt code

// toán tử 3 ngôi - Ternary operator


// if (a > b) {
//     console.log(a);
// }

// else if (a == b) {
//     console.log(b);
// }
// else if () {

// }
// else {
//     console.log(a);
// }

// let result = a > b ? a : a === b ? b : a


// console.log(result);


// switch case >= 3 diều kiện => switch case
// key là một biểu thức, giá trị này sẽ được so sánh với lần lượt các value
// nếu value nào = key => biểu thức statement với value tương ứng sẽ được
// thực hiện

// key = 0
// let array = [0, 1, 2, 3, 4]

// for (let index = 0; index < array.length; index++) {

//     switch (array[index]) {
//         case 0:
//         case 4:
//             console.log('value: ', 0);
//             break;
//         case 1:
//             console.log('value: ', 1);

//             break;
//         case 2:
//             console.log('value: ', 2);

//             break;
//         default:
//             console.log('default');

//             break;
//     }

// }



/// loop

// while loop

// - vòng lặp while
// - vòng lặp do while

// let num = 0
// while (num < 7) {

//     console.log('num: ', num);

//     if (num == 3) break
//     num += 1
// }

// for loop
// tính tổng nhiều số
// in ra số nguyên tố
// duyệt mảng

// for (;;) {


//     break
// }

//  => vòng lặp vô tận
// for (let index = 0; ; index++) {
//     const element = array[index];
// }

// so sánh for loop với while loop 


//   for loops                          |               while loop 
// lặp với số lần biết trước            |     không biết trước số lần lặp
// điều kiện ban đầu không bắt buộc     |     bắt buộc có điều kiện ban đầu
// Cho phép khỏi tạo biến trước         |     không hỗ trợ khởi tạo biến trước vòng lặp   => check lại 
// vòng lặp (các biến chỉ được khởi          
// tạo một lần cho đến khi hết vòng lăp

// giới thiệu về function trong javascrip


// function functionName(name, age) {

//     // statement 

//     console.log({ name, age });
// }

// // kể từ phiên bản ES6 trở đi của JS
// // arrow function
// const functionName = (name: string, age: number) => {
//     // statement 

//     console.log({ name, age });
//     console.log({ name, age });
//     console.log({ name, age });

//     return name
// }

// const functionName = (name, age) => console.log({ name, age });


// const functionName = name => console.log({ name });


const lower = (a, b) => a + b

console.log(100 * lower(4, 5));




