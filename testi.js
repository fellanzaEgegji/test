// Cards Slider - Vetëm me display
var cards = document.querySelectorAll('.card');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');

var visibleCards = 3; // sa karta shfaqen njehere
var index = 0;

function showCards() {
    // fsheh të gjitha kartat
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }
    // trego 3 karta nga indeksi aktual
    for (var i = index; i < index + visibleCards; i++) {
        if (cards[i]) {
            cards[i].style.display = 'block';
        }
    }
}

// button next
next.onclick = function() {
    index += visibleCards;
    if (index >= cards.length) index = 0; // loop tek fillimi
    showCards();
}

// button prev
prev.onclick = function() {
    index -= visibleCards;
    if (index < 0) index = cards.length - visibleCards; // loop tek fundi
    showCards();
}

// shfaq fillimisht
window.onload = showCards;

