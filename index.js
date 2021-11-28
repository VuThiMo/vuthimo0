/* 
    Lấy Html elment 

    const messageElement = document.getElementById('message');
    const element = document.querySelector('.div-element p');
    const elements = document.querySelectorAll('.div-element');
*/

/*
    Sửa style của 1 html element

    element.style.color = 'red';
    element.style.fontSize = '20px';

*/

/*
    Thêm class vào một element 
    element.classList.add('user-name');
*/

/* 
    Tạo một thẻ HTML 

    const a = document.createElement("p")
    a.innerHTML = "hello world"

    const b = document.querySelector(".user")
    b.append(a)
*/


/*
    Event

    Cách 1:
    const buttonElement = document.getElementById('btn');
    buttonElement.addEventListener('click', () => {
        console.log('Click');
    });

    Cách 2:
    <button id="btn" onClick="handleClick()">Click me</button>
*/


/*
1. Tạo một button
2. Thêm một sự kiện click vào button vừa Tạo
3. Khi người dùng click vào button thì tạo một thẻ div có nội dung là 
Hello world 
4. Css 
*/

// 1. Tạo một button
// const button = document.createElement('button');
// button.innerHTML = 'Add';
// button.classList.add('btn');

// // 2. Thêm một sự kiện click vào button vừa Tạo
// button.addEventListener('click', () => {
    
//     const div = document.createElement('div');
//     div.innerHTML = 'Hello world';
//     div.classList.add('message');

//     const container = document.getElementById('container');
//     container.append(div);
// });

// const container = document.getElementById('container');
// container.append(button);