let scrolltop = document.querySelector(".scroll-top");

window.onscroll = () => {
    this.scrollY >= 1000 ? scrolltop.classList.add("show"): scrolltop.classList.remove("show");
}

scrolltop.onclick = () => {
    window.scrollTo ({
        top: 0,
        behavior: "smooth"
    })
}
