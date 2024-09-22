//  - Phương thức với chuỗi trong js
//  + Các phương thức biến đổi

// let value = 'tôi học JS'

// console.log('upper: ', value.toUpperCase());
// console.log('lower: ', value.toLocaleLowerCase());


// Phương thức Repeat
{/* <String>.repeat(<times>)
    times => số lần lập lại */}
let re = 'hi '
// re.repeat(4) = re + re + re + re
console.log('repeat: ', re.repeat(4))

// // Phương thức padStart
// // <String>.padStart(<length>, <padString>)
// // => chèn chuỗi padString vào đầu chuỗi String sao cho String ban đầu có độ
// // dài bằng length,
// // length nhỏ hơn hoặc bằng độ dài của String ban đầu, phương thức này
// // không được thực hiện
// let str = '    y    '

// console.log('padStart', str.padStart(3, '!'));

// console.log('padStart', str.padEnd(3, '!'));

// // <String>.trim()
// // trimStart - trimEnd
// // dùng để xóa khoảng trắng thừa ở đầu và cuối chuỗi

// console.log('trim', str.trimEnd());

//  + Các phương thức tiện ích

// - Phương thức split
// <String>.split(<seperator>, <limit>)
// phân tách chuỗi String thành nhiều phần, các phần này phân tách nhau bằng
// một chuỗi <seperator>, các thành phần đó được lưu vào một đối tượng, đối tượng
// ở đây được hiểu là 1 mảng(Array)

// limit quy định số phần tử tối đa của mảng chứa các phần tử tách ra
// khi số phần tử trong mảng bằng limit => phương thức dừng hoạt động

// let str = 'Tôi đang học phương thức split'
// let res = str.split(' ', 3)
// console.log('split: ', res);

// - Phương thức split
// <String>.replace(<subStr>, <replaceString>)

// thay thế chuỗi subStr bằng chuỗi replaceString

// console.log('str.replace: ', str.replace('split', 'replace'));


//  + Các phương thức phân tách

//phương thức slice
//<String>.slice(<start>, <end>)

let str = 'Tôi đang học phương thức split'


let slice = str.slice()


// phương thức substring
// tham số truyền vào không chấp nhận số âm

// phương thức substr
//<String>.substr(<start>, <lenght>)
// lấy chính xác lenght(độ dài) ký tự kể từ ký tự thứ start.
// Nếu không chỉ định lenght hoặc là số ký tự từ start đến cuối 
// chuỗi nhỏ hơn length => thực hiện đến cuối chuỗi rồi dừng lại

// nếu không truyền gì vào hết => tạo ra bản sao của String ban đầu


let subStr = str.substr(-str.length, 10)
console.log('str: ', str);
console.log('sub: ', subStr);



// Câu 1: Các dấu hiệu đặc trưng của kiểu dữ liệu chuỗi

// bắt đầu bằng "", ''
// biểu thị cho một hoặc nhiều ký tự
// các ký tự trong chuỗi có thể được truy suất bằng chỉ số của nó 
// Các ký tự trong chuỗi không thể bị thay đổi bằng cách gán

// có bao nhiêu cách khỏi tạo một chuỗi ??

//     "", ''
// let a = 9

// b = String({1: 'a'})     // '1,2,3'  //  [object Object]

// console.log('b', b);


// Câu 2: Cho biết kết quả của các phép tính sau:

// ‘12’ + ‘12’ = '1212'
// 12 + ‘12’ = '1212
// ‘12’ * 12 = 144
// ‘a’ * 13 = NaN
// ‘a’ + 13 = 'a13'
// ‘aa’ + ‘12’ * 3 = 'aa36'


// Câu 3: Sử dụng phương thức repeat của string, viết chương trình in ra các nhóm kí tự sau (in trực tiếp lên màn hình khi chạy chương trình):





// Câu 4: Cho chuỗi a = ‘how to learn js’, cho biết kết quả của các phương thức sau:
// a = 'how to learn js'
// console.log('', a.slice(-14, 8));

// a.split(‘t’) = ['how t', 'o learn ..']
// a.replace(‘ a’, ‘__’)
// a.padStart(‘o’) =
//


// Câu 5: Cho biết kết quả của các phép so sánh sau:

// ‘thanh cha’ < ‘ thế con’   c = c h < o => tr


// let cham = '.'
// let cong = '+'
// let tru = '-'

// console.log(cham.repeat(12));
// console.log(cham.repeat(3) + cong.repeat(2) + cham.repeat(2) + cong.repeat(2) + cham.repeat(3));



// Kiểu dữ liệu Boolean true/false

// let a = true
// Boolean(1) => true

// Boolean('') => false
// Boolean(' ') => true

// Boolean() => false
// Boolean(true) => true

// Boolean('asad') => true


// Các trường hợp mà khi chuyển thành Boolean mang giá trị true

// ** phải nhớ **
// - Một số khác 0 ( khác - 0)
// - Một chuỗi không rỗng (chưa ít nhất một ký tự tính cả ký tự Trống)
// - Giá trị true
// - một object


// đối với giá trị null và undefine => chuyển sang Boolean => false

// một giá trị mà khi chuyển về Boolean = true => truthy => điều đúng
// một giá trị mà khi chuyển về Boolean = false => falsy => điều sai

// Number(true) => 1
// Number(false) => 0

// liên hệ giữa kiểu dữ liệu boolean và toán tử so sánh

// 13 == '13' => true

// 13 === '13' => false

// 5 !== 6 => true

// 5 != '5' => false

// 5 !== '5' => true

// giới thiệu toán tử quan hệ


// AND &&

//     OR ||

//     NOT !




// Boolean(name) => false

function check(a, b) {


    return a > b
}

if (3 < 4 || 6 > 7) {
    console.log('dung');
}
else {
    console.log('sai')
}
