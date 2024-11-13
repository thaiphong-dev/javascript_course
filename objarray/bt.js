

// => {olderThan18: [], youngerThan18: []}
const gropyByAge = () => {
    const arr = [{ name: 'Phong', age: 17 }, { name: 'Phong1', age: 20 }, { name: 'Phong1', age: 38 }, { name: 'Phong3', age: 21 }]
    const result = arr.reduce((acc, { name, age }) => {

        if (!acc[name]) {
            acc[name] = {}
        } else {
            if (!acc[name].age) {
                acc[name].age = age  //=> {phong: {age : 17}}\
                acc[name]['age']
                // thuộc tính tên phong.age => thêm thuộc tính age vào Phong
                acc[name][age] = age  //=> {phong: {17 : 17}}\
            }
        }
        // if (!acc['olderThan18'] && !acc['youngerThan18']) {
        //     acc['olderThan18'] = [];
        //     acc['youngerThan18'] = [];
        // }
        // else {
        //     console.log(name, age);
        //     if (arr[age] >= 18) {
        //         acc['olderThan18'].push({ name, age });

        //     }
        //     else {
        //         acc['youngerThan18'].push({ name, age });
        //     }
        // }
        return acc;

    }, {})
    console.log('lallaa', result);
}
gropyByAge()

