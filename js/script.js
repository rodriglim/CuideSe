document.onscroll = () => {
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



const $veganosMenu = document.querySelector('#veganos');
const $lactoseMenu = document.querySelector('#semLactose');
window.idBotaoClicado = '';

function $buttonSelection(e) {

    window.idBotaoClicado = e
   
    if(idBotaoClicado == 'vegan'){
        $veganosMenu.style.display = 'block' ;
        $lactoseMenu.style.display= 'none';
        
    }
    else if(idBotaoClicado == 'lactose'){
        $lactoseMenu.style.display = 'block';
        $veganosMenu.style.display = 'none';
     }

}

