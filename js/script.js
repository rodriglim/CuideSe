document.onscroll = () => {
    var nav = document.getElementById('nav');
    window.addEventListener("scroll", function (event) {
        if (window.scrollY < 420) {
            nav.style.background = "transparent";
        }
        else {       
             nav.style.background = "#00ff79e6";
        }
    });
}