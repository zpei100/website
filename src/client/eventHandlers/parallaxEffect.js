import $ from 'jquery'

$(window).scroll(function() {
  const image = $('.banner img')
  const scrollPosition = $(this).scrollTop()
  const greeting = $('.banner .greeting')

  image.css({transform: `scale(${1 - 0.8*(scrollPosition / image.height())})`})
  greeting.css({transform: `translate(${scrollPosition / 10}px, ${scrollPosition}px)`, opacity: 1 - 4 * (scrollPosition / image.height()) })
})