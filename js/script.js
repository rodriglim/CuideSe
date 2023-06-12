function $menuClique(){
    const $buttonClique = document.getElementById('navBarMenu');
    const $navMenu = document.getElementById('nav');
    $buttonClique.addEventListener('click', event => {
        $navMenu.style.background = "#00ff79e6";
    })
}



document.onscroll= () => {
    var nav = document.getElementById('nav');
    window.addEventListener("scroll", function (event) {

        if (window.scrollY < 550) {
            nav.style.background = "transparent";
        }
        else {       
             nav.style.background = "#00ff79e6";
        }
    });
}


