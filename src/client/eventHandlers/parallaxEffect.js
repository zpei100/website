import $ from 'jquery'

const wait = 5;
var oldTime = new Date();

var image;
var greeting;

$(window).ready(function() {
  image = $('#hero img');
  greeting = $('#greeting');
})

$(window).scroll(function() {
  if(new Date() - oldTime > wait) {
    oldTime = new Date();
    const scrollPosition = $(this).scrollTop()
    const vertical = window.screen.width <= 1024

    if (vertical) {
      image.css({
        transform: `scale(${1.4 - 0.3*(scrollPosition / image.height())})`, 
        opacity: 1 - 1.5 * (scrollPosition / image.height())
      })

      greeting.css({
        opacity: 1 - 2.5 * (scrollPosition / image.height()), 
        // transform: `translateY(${scrollPosition}px)` 
      })

    } else {
      image.css({transform: `scale(${1 - 0.8*(scrollPosition / image.height())})`})
      greeting.css({transform: `translate(${vertical ? 0 : scrollPosition/10}px, -${vertical ? 0 : scrollPosition/10}px)`, opacity: 1 - 2.5 * (scrollPosition / image.height()) })
    }
  }
})