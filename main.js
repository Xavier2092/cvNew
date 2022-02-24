'use strict';

const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(e){
    e.preventDefault();
     const form = new FormData(this);
     const response = await fetch(this.action, {
         method: this.method,
         body: form,
         headers: {
             'Accept' : 'application/json'
         }
     })
     if(response.ok){
         this.reset();
         alert('Gracias por escribir!. En breve responderé tu mensaje.');
     }
}

$(document).ready(() => {
    let alturaNavBar = $('.navbar').offset().top;

    $(window).on('scroll', ()=> {
        if( $(window).scrollTop() > alturaNavBar ){
            $('.navbar').addClass('navbarFixed');
        }else{
            $('.navbar').removeClass('navbarFixed');
        }
        
        if ($(this).scrollTop() > 300) {
            $('a.scroll-top').fadeIn('slow');
        } else {
            $('a.scroll-top').fadeOut('slow');
        }
        });
        $('a.scroll-top').click(function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, 600);
    });

    $('.casillaimg').hover(()=> {
        $('.btnMedia').css('display', 'inline');

    });
    $('.header').hover(()=> {
        $('.btnMedia').css('display', 'none');
    })

    $('.imgSite1').click(()=> {
        window.open('https://xavier2092.github.io/BMICalculate/');
    })
    $('.imgSite2').click(()=> {
        window.open('https://youtu.be/qrSzG7CP2Rw');
    })
    $('.imgSite3').click(()=> {
        window.open('https://youtu.be/fBfNMrLWdfI');
    })
    $('.imgSite4').click(()=> {
        window.open('https://xavier2092.github.io/conversorDeDivisas/');
    })
    $('.imgSite5').click(()=> {
        window.open('https://calculadoravirtualimc.000webhostapp.com/');
    })
})
