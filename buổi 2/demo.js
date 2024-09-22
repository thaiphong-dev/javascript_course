// - kiểu dữ liệu chuỗi trong JS string

let a = "toi ten Phong"

// let c = 'tôi tên: 'Phong'

let d = 'tôi tên "Phong"'


let e = 9
console.log('contructor: ', d);

// excape character trong js
//  => những ký tự có chức năng phụ trợ cho chuỗi
// => bao gồi một dấu \đứng trước 1 ký tự
// vd: \n => xuống dòng

// \n => Đưa con trỏ xuống dòng
// \t => In ra một horizotal(ngang) tab giống như tab khi gõ văn bản
// \b => Xóa kí tự đứng trước con trỏ nếu có
// \" => In ra ký tự "
// \' => In ra ký tự '
// \\ => In ra ký tự \

console.log("j" - 'jkk')

// template literals 

let cName = 'Phong'
let age = 25

console.log(`tôi tên ${cName}, ${age + 10} tuổi`)


// Các phương thức ở trong chuỗi JS

// at(<index>) => trả ra ký tự nằm ở vị trí index ES 6 

// <String>.includes(<searchString>, <position>)
// => Giúp xác định xem <SearchString> có nằm trong cái chuỗi <string>
// từ <position> đến cuối chuỗi không
//

// <String>.startWith(<searchString>, <position>) 
// <String>.endsWith(<searchString>, <position>)  default position

// <String>.indexOf(<searchString>, <fromIndex>)
// => tìm kiếm và trả về lần xuất hiện đầu tiên của <searchString> 
// trong <string>, phạm vi tìm kiếm từ fromIndex
// <String>.lastIndexOf(<searchString>, <fromIndex>) default sting.length


let b = 'tôi phong tên phong'

let searchString = "phong"

console.log(b.length);


console.log(b.lastIndexOf(searchString, 8));




