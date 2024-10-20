
// object là một đối tượng, và đối tượng này lưu trữ dữ liệu theo dạng danh sách
// khai báo một mảng 

//1. dùng constructor array => class => OOP
// <new> Array(<element>)  -  từ khóa "new" có thể có hoặc không
// element là số nguyên dương => trả element phần tử với 
// mỗi phần tử là một giá trị trống
// element là số nguyên âm hoặc là số thập phân => lỗi
let arr = new Array(5)
// console.log('arr', arr);

//2. sử dụng ngoặc vuông
let str = "1,2,3"
// let arr1 = [1, 2, 3]
// console.log('arr1', typeof arr1);
// console.log('arr1', arr1 + [12, 34]);
// [1, 2, 3] => "1,2,3" => + "4" => "1,2,34"
//  => '1,2,3,4'  =>  '1,2,34'
// console.log('arr1', arr1  -/* [12, 34]); => NaN

// array index 0 => array.length - 1
// array.[index] => phần tử thứ index trong array

// typeof arr1

// lưu ý: *Không dùng toán tử so sánh cho 2 array trong js
// không dùng toán tử == để kiểm tra 2 mảng giống nhau
// các toán tử so sách còn lại => array được chuyển về string sau đó đem đi so sánh
// console.log(['ph'] < ['pt']);

// let emp = [,]
// console.log('emp', emp[0]);

// Các phương thức xác định
// array.at(<index>)
// index tính từ trái sang => 0 -> array.length - 1
// index tính từ phải sang => -1 => -array.length

// array.at(index) không tồn tại in dex không thuộc 2 khoảng trên => undefined
// khi index là số thập phân thì sẽ trả ra phần tử có vị trí tương ứng với phần nguyên
let arr1 = [1, 2, 3]
//          0  1  2
//         -3 -2 -1
// console.log(arr1.at(1));


// array.includes(<searchElement>, <position>)
// giúp xác định một giá trị nào đó có nằm trong array không


// Các phương thức tìm kiếm
// array.indexOf(<searchElement>, <position>) => trả ra vị trí lần đầu phần tử xuất hiện
// array.lastIndexOf(<searchElement>, <position>)=> trả ra vị trí lần cuối cùng phần tử xuất hiện
// *có 2 loại tìm kiếm => một loại tìm bằng index => phần tử => không có => undefined
// => một loại tìm bằng giá trị phần tử => index => không có => -1
let arr2 = ['a', 'b', 'c', 'd', 'e', 'c', 'f']

console.log(arr2.indexOf('c'));
console.log(arr2.lastIndexOf('c'));



// Các phương thức cập nhật
// Stack - Queue
// Stack - hoạt động theo kiểu LIFO last in first out
// Queue - hoạt động theo kiểu FIFO first in first out

//***unshift - thêm một hoặc nhiều phần tử vào đầu mảng
// array.unshift(<element>)
let arr3 = []
// arr3.unshift('lal', 'lolo')
//***push - thêm một hoặc nhiều phần tử vào cuối mảng
// array.push(<element>)
// arr3.push('lal', 'lolo')

//***shift - bỏ  phần tử đầu tiên của mảng và trả về giá trị của phần tử đó
// array.shift()

// arr3.shift()

//***pop - bỏ  phần tử cuối cùng của mảng và trả về giá trị của phần tử đó
// array.pop()

arr3.pop()
// console.log(arr3.pop());

//*** splice
// array.splice(<start>, <deleteCount>, <items)
// start vị trí bắt đầu
// deleteCount số lượng phần tử bị loại bỏ kể từ vị trí <start>
// items là những phần tử được thêm vào để thế chỗ cho những phần tử đã bị loại bỏ

let arr4 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
arr4.splice(2, 3, 'phong', 'lall', 34)

console.log(arr4);


// let obj = {
//     name: 'phong',
//     age: 24
// }
// làm việc với object (array, object ... )

// => clone ra một object mới
// rồi thực hiện các thay đổi trên object mới
// dùng object mới đó gán đè lên object ban đầu

