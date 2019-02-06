module.exports = {
  scrollToById: (element, behavior, block) => {
    document.getElementById(element).scrollIntoView({behavior, block})
  }
}