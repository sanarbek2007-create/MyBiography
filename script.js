
console.log("Сайт успешно запущен!");

alert("Қош келдіңіз! Менің жеке сайтыма қош келдіңіз!");

console.log("Менің сайтым жұмыс істеп тұр!");

const photo = document.querySelector(".profile-photo");

photo.addEventListener("click", function() {
    alert("Бұл менің жеке фотосуретім!");
});
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️ Светлая тема";
    } else {
        themeButton.textContent = "🌙 Тёмная тема";
    }
});