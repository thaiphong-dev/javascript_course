let count = 0;

// nhận vào callback function và tham số thứ 2 là thời gian đợi tính bằng giây

// => hàm callback sẽ được thực hiện sau "x" giây kể từ lúc hàm setTimeout được gọi
// setTimeout(() => {
//     count += 10
//     // console.log('bđb', count);

// }, 1000);

// Giống như setTimeout
// nhưng thực hiện lặp hàm callback sau mỗi khoảng thời gian x được cho
// let a = setInterval(() => {
//     count += 1
//     console.log(count);

// }, 1000);

// setTimeout(() => {
//     clearInterval(a)

// }, 5000);
////////////////////////////////////////////////////////////////////////////*css*/`

// callback function  và promise

// calback fucntion => một hàm được gọi lại.
// một hàm được xem là bất đồng bộ khi nó nhận vào một callback function

// const func = (a, b) => { // hàm bình thường
//     return a + b
// }

// func()

// const calback = (sum) => { // callback function
//     console.log(sum);

// }
// const calbackFunc = (a, b, cb) => { // hàm bất đồng bộ
//     cb(a + b)
// }

// calbackFunc(4, 5, calback)

// 1 hàm bất đồng bộ luôn có biết số chạy sai
// hàm bất đồng bộ luôn có thể xảy ra lỗi
// trong hàm bất đồng bộ luôn trả ra 2 luồng
// 1 là thành công => làm gì đó
// 2 là thất bại => làm gì đó

// tính diện tích hình thang => (a + b) * h / 2

const add = (a, b, cb) => {
    setTimeout(() => {
        if (typeof a !== "number" || typeof b !== "number") {
            const error = "dữ liệu phải là kiểu number";
            return cb(error);
        }

        cb(undefined, a + b); // cạnh trên + cạnh dưới
    }, 1000);
};

const multifly = (a, b, cb) => {
    setTimeout(() => {
        if (typeof a !== "number" || typeof b !== "number") {
            const error = "dữ liệu phải là kiểu number";
            return cb(error);
        }

        cb(undefined, a * b); //  (cạnh trên + cạnh dưới * chiều cao)
    }, 1000);
};

const divide = (a, cb) => {
    setTimeout(() => {
        if (typeof a !== "number") {
            const error = "dữ liệu phải là kiểu number";
            return cb(error);
        }
        cb(undefined, a / 2);
    }, 1000);
};


// (4 + 5 ) + 6
const addPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== "number" || typeof b !== "number") {
                const error = "dữ liệu phải là kiểu number";
                return reject(error);
            }
            resolve(a + b); // cạnh trên + cạnh dưới
        }, 1000);
    });
};
// addPromise(4, 5)
//     .then((result) => {
//         return addPromise(result, 6);
//     })
//     .then((res) => {
//         console.log("cuoi cung", res);
//         return addPromise(result, 34)
//     })
//     .then((res) => {
//         console.log("cuoi cung", res);
//         return res
//     })
//     .catch(error => console.log(error)
//     )


const multiflyPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== "number" || typeof b !== "number") {
                const error = "dữ liệu phải là kiểu number";
                return reject(error);
            }
            resolve(a * b); // cạnh trên + cạnh dưới
        }, 1000);
    });
};

const dividePromise = (a) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== "number") {
                const error = "dữ liệu phải là kiểu number";
                return reject(error);
            }
            resolve(a / 2); // cạnh trên + cạnh dưới
        }, 1000);
    });
};


const tinhDienTichHinhThang = (a, b, h, cb) => {
    add(a, b, (error, result) => {
        if (error) return cb(error);
        multifly(result, h, (error, result) => {
            if (error) return cb(error);
            divide(result, (error, result) => {
                if (error) return cb(error);
                cb(undefined, result);
            });
        });
    });
};

const tinhDienTich = (a, b, h) => {
    addPromise(a, b)
        .then(res => multiflyPromise(res, h))
        .then(result => dividePromise(result))
        .then(square => console.log('diện tích hình thang ', square))
        .catch(error => console.log(error));

}


// tinhDienTichHinhThang(2, 3, 2, (error, result) => {
//     if (error) return console.log(error);

//     console.log(result)
//     return result
// })

// promise
// khi trong một promise có cả hàm resolve và reject thì hàm nào viết trước sẽ được chạy trước và không chạy hàm còn lại

// const aPromise = new Promise((resolve, reject) => {
//     resolve('thành công ')

//     reject('thất bại')
// })

// aPromise.then((resolve) => {
//     console.log('hàm thực hiện: ' + resolve);
// }, (reject) => {
//     console.log('hàm thực hiện1: ' + reject);
// })


