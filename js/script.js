document.onscroll= () => {
    var nav = document.getElementById('nav');
    window.addEventListener("scroll", function (event) {
        if (window.scrollY <= 500) {
            nav.style.background = "rgba(0, 255, 121, 0.3)";
            
        }
        else {       
             nav.style.background = "rgba(0, 255, 121, 0.8)";
        }
    });
}


