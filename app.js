const reviewList = document.querySelector("#review-list");
const reviewItems = document.querySelectorAll(".review-item");
const reviewDots = document.querySelectorAll(".review__dot");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
let currentIndex = 0;
const widthItem = reviewItems[0].offsetWidth;

// todo : slider
const slider = (index, prefix = -1) => {
    reviewList.style = `transform: translateX( ${
        widthItem * index * prefix
    }px )`;
};

// todo : add class
const addActive = function (ordinalNumber) {
    reviewDots.forEach(function (item) {
        item.classList.remove("review__dot--active");
    });
    reviewDots.forEach(function (item, index) {
        if (index === ordinalNumber) {
            item.classList.add("review__dot--active");
        }
    });
};

btnNext.addEventListener("click", function (e) {
    if (currentIndex >= reviewItems.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    slider(currentIndex);
    addActive(currentIndex);
});

btnPrev.addEventListener("click", function (e) {
    if (currentIndex < 1) {
        currentIndex = reviewItems.length - 1;
    } else {
        currentIndex--;
    }
    slider(currentIndex);
    addActive(currentIndex);
});
