import $ from 'jquery'

$(window).scroll(function() {
  const image = $('#banner img')
  const scrollPosition = $(this).scrollTop()
  const greeting = $('#greeting')

  image.css({transform: `scale(${1 - 0.8*(scrollPosition / image.height())})`})
  greeting.css({transform: `translate(${scrollPosition/10}px, -${scrollPosition/10}px)`, opacity: 1 - 2.5 * (scrollPosition / image.height()) })
})