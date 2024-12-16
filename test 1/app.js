// Задача №1

const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/; //
    return regExp.test(str);
}

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45")); 


// Задача №2

const logEverySecond = () => {
    let counter = 0;
    setInterval(() => {
        counter++;
        console.log(`Прошла секунда // ${counter}`);
    }, 1000);
};

logEverySecond();


// Задача №3

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        if (i === 10) {
            clearInterval(interval);
        }
        i++; 
    }, 1000); 
};

count();


// Задача №4

const colorBlock = document.getElementById('color-block');
        colorBlock.addEventListener('click', function() {
            colorBlock.classList.toggle('active');
        });


// Задача №5

const xhr = new XMLHttpRequest();

const url = "https://jsonplaceholder.typicode.com/posts/1";

xhr.open("GET", url, true);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) { 
        if (xhr.status === 200) { 
            const response = JSON.parse(xhr.responseText);
            console.log("Полученные данные:", response);
        } else {
            console.error("Ошибка запроса:", xhr.status, xhr.statusText);
        }
    }
};

xhr.send();
