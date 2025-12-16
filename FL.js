document.querySelectorAll(".item img").forEach(img => {
    const original = img.src;
    const gif = img.dataset.gif;

    img.addEventListener("mouseenter", () => {
        img.src = gif;
    });

    img.addEventListener("mouseleave", () => {
        img.src = original;
    });
});


// находим карточку с Dota 2
const dotaItem = document.querySelector('.gallery img[src="img/photo2.jpg"]').parentElement;
const body = document.body;

// при наведении
dotaItem.addEventListener("mouseenter", () => {
    body.style.background = `linear-gradient(
        to bottom,
        #e40303 0%, #e40303 16.66%,
        #ff8c00 16.66%, #ff8c00 33.33%,
        #ffed00 33.33%, #ffed00 50%,
        #008026 50%, #008026 66.66%,
        #004dff 66.66%, #004dff 83.33%,
        #750787 83.33%, #750787 100%
    )`;
    body.style.transition = "background 1s ease";
});

// при уходе курсора
dotaItem.addEventListener("mouseleave", () => {
    body.style.background = ""; // возвращаем исходный фон
});

