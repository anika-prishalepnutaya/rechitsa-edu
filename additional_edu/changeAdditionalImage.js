const currentPage = window.location.pathname;

let images = [];

if (currentPage.includes('dom_tvorchestva')) {
    images = ["дом_творчества.jpg", "дом_творчества1.jpg", "дом_творчества2.jpg", "дом_творчества3.jpg", "дом_творчества4.jpg"];
} else if (currentPage.includes('olimp')) {
    images = ["Олимп.jpg", "олимп1jpg.jpg", "олимп2.jpg", "олимп3.jpg", "олимп4.jpg", "олимп5.jpg"];
} else if (currentPage.includes('sots-ped_center')) {
    images = ["соц-пед_центр.jpg", "соц-пед_центр1jpg.jpg", "соц-пед_центр2.jpg", "соц-пед_центр3.jpg"];
} else {
    images = [];
}

let currentIndex = 0;

function changeSlide(direction) {
    if (images.length === 0) return; 
    
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById('additional-img').src = images[currentIndex];
}