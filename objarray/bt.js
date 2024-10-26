const array = [
    {
        name: "van a",
        age: 26,
        gender: "male",
        phoneNumber: "0123123333",
        address: "113 abc ",
        dateCreated: new Date(),
        roles: ["GD", "BA"],
    },

    {
        name: "Thi C",
        age: 30,
        gender: "female",
        phoneNumber: "0120023333",
        address: "113 abc ",
        dateCreated: new Date(),
        roles: ["KT"],
    },

    {
        name: "van abac",
        age: 18,
        gender: "male",
        phoneNumber: "0123123333",
        address: "113 abc ",
        dateCreated: new Date(),
        roles: ["NV"],
    },

    {
        name: "Tran A",
        age: 36,
        gender: "male",
        phoneNumber: "0123123333",
        address: "113 abc ",
        dateCreated: new Date(),
        roles: ["GD", "TL", "PO"],
    },

    {
        name: "Thanh Y",
        age: 22,
        gender: "female",
        phoneNumber: "0123123333",
        address: "113 abc ",
        dateCreated: new Date(),
        roles: ["QC", "PM"],
    },
];

// 1. tạo một bảng hiển thị dữ liệu trên dùng html css
// 2. Tính xem có bao nam, bao nữ
// 3. kiểm tra xem có nv nào trên 40 tuổi không
// => nếu có in ra 1 dòng p : Có ... nv trên 40
// => nếu không in ra dòng p: Không có nv trên 40
// 4. Kiểm tra xem có nv nào là GD trên 30 tuổi không
// nếu có =>  in như trên
// nếu không =>
// 5. viết một hàm cho phép khi bấm vào một dòng trên bảng
// hiển thị thong tin của dòng đó dưới dạng Alert