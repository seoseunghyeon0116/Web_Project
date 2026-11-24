let allBtn = document.querySelector("#allBtn");
let randomBtn = document.querySelector("#randomBtn");


allBtn.addEventListener("mouseover", function () {
    allBtn.style.backgroundColor = "orange";
});
allBtn.addEventListener("mouseout", function () {
    allBtn.style.backgroundColor = "";
});


randomBtn.addEventListener("mouseover", function () {
    randomBtn.style.backgroundColor = "orange";
});
randomBtn.addEventListener("mouseout", function () {
    randomBtn.style.backgroundColor = "";
});