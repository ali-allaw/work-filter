let switcher = document.querySelectorAll(".switcher li");
let arrSwicth = Array.from(switcher)
let imgs = document.querySelectorAll(".gallery img");
let arrImgs = Array.from(imgs)

arrSwicth.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        arrSwicth.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        arrImgs.forEach((img) => {
            img.style.display = "none"
        })
        document.querySelectorAll(e.currentTarget.dataset.cat).forEach((ele) => {
            ele.style.display = "block"
            //When u have more than one element u should use forEach
        })
    })
})