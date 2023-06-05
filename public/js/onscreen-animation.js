const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            console.log("a")
        } else {
            entry.target.classList.remove("show");
            console.log("b")
        }
    })
});

const hiddenItems = document.querySelectorAll(".hidden");
const hiddenItemsLeft = document.querySelectorAll(".hidden-left");
const hiddenItemsRight = document.querySelectorAll(".hidden-right");
hiddenItems.forEach((element) => { observer.observe(element) });
hiddenItemsLeft.forEach((element) => { observer.observe(element) });
hiddenItemsRight.forEach((element) => { observer.observe(element) });
