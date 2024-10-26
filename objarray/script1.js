// OBJECT
// object là kiểu dữ liệu tập trung nhiều loại dữ liệu
// 2 object có dữ liệu giống nhau không bằng nhau
// ví dụ 2 xe cùng hãng cùng model, cùng v.v nhưng là 2 đối tượng
// riêng biệt khác nhau. mỗi object sẽ được lưu vào một vùng nhớ khác nhau

// Cách tạo một object


// const source = {
//     name: "Phong", age: 24, gender: "male",
//     phones: [1231232, 342234234, 34534],
//     date: new Date(),
//     calculate: (a, b) => {
//         return a + b
//     }
// }

// const target = {
//     address: '123 bac , zys'
// }


// console.log(source['name']);
// console.log(source.date);

// console.log('keys', Object.keys(source)); // lấy danh sách key của obj
// console.log('values', Object.values(source)); // lấy ra danh sách values của obj
// console.log('entries', Object.entries(source)); // lấy ra danh sách cặp [keys, value] của obj
// Object.assign(target, source);// copy thuộc tính của source bỏ vào target
// //-------====-target, source


