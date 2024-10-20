
const createButton = () => {

    const groupButton = document.getElementById('buttonGroup');

    // div > p > element

    const arrayButton = ['%', "CE", "C", "delete", "7", "8", "9", '/', "4", "5", "6", "x",
        "1", "2", "3", "+", "~", "0", ".", "="
    ]

    for (let index = 0; index < arrayButton.length; index++) {
        const element = arrayButton[index];
        const button = document.createElement('div')
        const text = document.createElement('p')


        if (
            element === 'delete'
        ) {
            text.innerHTML = '<='
            button.appendChild(text)

        } else if (
            element === '='
        ) {
            text.innerHTML = element
            button.appendChild(text)
            button.classList.add('cusButton')
            button.style.backgroundColor = '#560707'


        } else {

            text.innerHTML = element
            button.appendChild(text)
            button.classList.add('cusButton')
        }

        button.classList.add('cusButton')

        groupButton.appendChild(button)
    }
}


createButton()




// bài toán 2 số

// nhập số thứ nhất => phép tính => nhập số thứ 2 =>      phép tính    =>  số thứ 2  =>  phép tính
//                                                             ||                            ||
//                                                             kết quả lần 1               kết quả lần 2



//                                                     số thứ nhất và số thứ 2