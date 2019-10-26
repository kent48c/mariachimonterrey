$(document).ready(main);

var cont = 1;

function main () {
    $('.menu_bar').click(menu);
    $('.menu_link').click(menu);
    function menu (){
        // $('nav').toggle();

        if (cont == 1) {
            $('header').animate({
                left: '0'
            });
            cont = 0;
        } else {
            cont = 1;
            $('header').animate({
                left: '-100%'
            });
        }
    };
};