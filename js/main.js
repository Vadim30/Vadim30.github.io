var burger = document.getElementById ("menuLabel");
    burger.addEventListener( 'click', function() {
    burger.style.borderRadius = '50%';
    burger.classList.toggle('burgerClass1');
} );

var left = document.querySelector( '.circle-left' );
var right = document.querySelector( '.circle-right' );
var image = document.querySelectorAll( '.slaidbar_phote' );
var i = 3;
left.onclick = function(){
    image[i].style.display = 'none';
    i--;
    if( i < 0 ){
        i = image.length - 1;
    }
    image[i].style.display = 'block';
}

right.onclick = function(){
    image[i].style.display = 'none';
    i++;
    if( i >= image.length ){
        i = 0;
    }
    image[i].style.display = 'block';
}
    
