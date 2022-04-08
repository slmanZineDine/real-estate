// Responsive Nav-Bar
let mobile = document.querySelector(".mobile");
let links = document.querySelector(".links");

mobile.onclick = function () {
    links.classList.toggle("responsive");
}

// Scroll To Top
let btn = document.querySelector(".btn-scroll");
if(btn) {
    function showBtn() {
        if(window.innerHeight < window.scrollY )
            btn.style.display = "block";
        else
        btn.style.display = "none";
    }
    function toTop() {
        window.scrollTo({top: 0, left:0, behavior: "smooth"});
    }
    window.onscroll = showBtn;
    btn.addEventListener("click", toTop)
}