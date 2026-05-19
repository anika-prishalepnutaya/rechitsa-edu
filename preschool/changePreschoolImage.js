// Определяем, на какой странице мы находимся
const currentPage = window.location.pathname;

// Проверяем название файла и устанавливаем картинки
let images = [];
 if (currentPage.includes('kindergarten_20')) {
    images = ["сад20.jpg"]
} else if (currentPage.includes('sanatory_kindergarten_21')) {
    images = ["сад21.jpg", "сад21_1.jpg"];
} else if (currentPage.includes('kindergarten_22')) {
    images = ["сад22.jpg", "сад22_1.jpg", "сад22_2.jpg", "сад22_3.jpg"];
} else if (currentPage.includes('kindergarten_23')) {
    images = ["сад23.jpg", "сад23_1.jpg"];
} else if (currentPage.includes('kindergarten_24')) {
    images = ["сад24.jpg", "сад24_1.jpg"];
} else if (currentPage.includes('kindergarten_26')) {
    images = ["сад26.jpg", "сад26_1.jpg"];
 } else if (currentPage.includes('kindergarten_2')) {
    images = ["сад2.jpg", "сад2_1.jpg", "сад2_2.jpg"];
} else if (currentPage.includes('kindergarten_3')) {
    images = ["сад3.jpg", "сад3_1.jpg", "сад3_2.jpg", "сад3_3.jpg"];
} else if (currentPage.includes('preschool_center')) {
    images = ["дошк_образование.jpg", "дошк_образование_1.jpg", "дошк_образование_2.jpg", "дошк_образование_3.jpg"];
    
} else if (currentPage.includes('sanatory_kindergarten_6')) {
images = ["сад6.jpg", "сад6_1.jpg", "сад6_2.jpg"];

} else if (currentPage.includes('kindergarten_7')) {
    images = ["сад7.jpg", "сад7_1.jpg", "сад7_2.jpg"];
} else if (currentPage.includes('kindergarten_8')) {
    images = ["сад8.jpg", "сад8_1.jpg", "сад8_2.jpg"];
} else if (currentPage.includes('kindergarten_10')) {
    images = ["сад10.jpg", "сад10_1.jpg", "сад10_2.jpg"];
} else if (currentPage.includes('kindergarten_14')) {
    images = ["сад14.jpg", "сад14_1.jpg", "сад14_2.jpg"];
} else if (currentPage.includes('kindergarten_17')) {
    images = ["сад17.jpg", "сад17_1.jpg", "сад17_2.jpg", "сад17_3.jpg", "сад17_4.jpg", "сад17_5.jpg"];
} else if (currentPage.includes('kindergarten_18')) {
    images = ["сад18.jpg", "сад18_1.jpg", "сад18_2.jpg"];
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

    document.getElementById('preschool-img').src = images[currentIndex];
}
