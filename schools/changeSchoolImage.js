// Определяем, на какой странице мы находимся
const currentPage = window.location.pathname;

// Проверяем название файла и устанавливаем картинки
let images = [];

if (currentPage.includes('gumnaziya')) {
    images = ["гимназия.jpg", "гимназия1.jpg", "гимназия2.jpg"];
} else if (currentPage.includes('school_2')) {
    images = ["школа2.jpg", "школа2_1.jpg", "школа2_2.jpg"];
} else if (currentPage.includes('school_4')) {
    images = ["школа4.jpg", "школа4_1.jpg", "школа4_3.jpg", "школа4_5.jpg", "школа4_6.jpg", "школа4_6.jpg", "школа4_7.jpg", "школа4_8.jpg"];
} else if (currentPage.includes('school_5')) {
    images = ["школа5.jpg", "школа5_1.jpg", "школа5_2.jpg", "школа5_3.jpg", "школа5_4.jpg", "школа5_5.jpg"];
} else if (currentPage.includes('school_6')) {
    images = ["школа6.jpg","школа6_1.jpg", "школа6_2.jpg", "школа6_3.jpg", "школа6_4.jpg", "школа6_5.jpg", "школа6_6.jpg"];
} else if (currentPage.includes('school_7')) {
    images = ["школа7.jpg", "школа7_1.jpg", "школа7_2.jpg", "школа7_3.jpg", "школа7_4.jpg", "школа7_5.jpg"];
} else if (currentPage.includes('school_8')) {
    images = ["школа8.jpg", "школа8_1.jpg", "школа8_2.jpg", "школа8_3.jpg"];
} else if (currentPage.includes('school_10')) {
    images = ["школа10.jpg", "школа10_1.jpg"];
} else if (currentPage.includes('school_11')) {
    images = ["школа11.jpg", "школа11_1.jpg", "школа11_2.jpg", "школа11_3.jpg"];
} else if (currentPage.includes('school_12')) {
    images = ["школа_12.jpg", "школа12_1.jpg", "школа12_2.jpg"];
} else if (currentPage.includes('licei')) {
    images = ["лицей.jpg","лицей1.jpg", "лицей2.jpg"];
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

    document.getElementById('school-img').src = images[currentIndex];
}
