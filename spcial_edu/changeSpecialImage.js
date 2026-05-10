// Определяем, на какой странице мы находимся
const currentPage = window.location.pathname;

// Проверяем название файла и устанавливаем картинки
let images = [];

if (currentPage.includes('special_kindergarten_4')) {
    images = ["сад4.jpg", "сад4_1.jpg", "сад4_2.jpg", "сад4_3.jpg"];
} else if (currentPage.includes('special_kindergarten_9')) {
    images = ["сад9.jpg", "сад9_1.jpg"];
} else if (currentPage.includes('correction_center')) {
    images = ["цикроир.jpg", "цикроир1.jpg", "цикроир2.jpg", "цикроир3.jpg", "цикроир4.jpg"];
} else {
    // Если не найдено - пустой массив
    images = [];
}

let currentIndex = 0;

function changeSlide(direction) {
    if (images.length === 0) return; // Если нет картинок - не делаем ничего
    
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById('special-img').src = images[currentIndex];
}