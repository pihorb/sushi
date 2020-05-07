export class Lazy {
  constructor() {
    this.images = document.querySelectorAll('[data-bg]')
    this.config = {
      root: null,
      rootMargin: '300px',
      threshold: 0,
    }
  }

  preloadImage(image) {
    if (!image) return false
    const background = image.getAttribute('data-bg')
    const root = require(`./images/${background}`)
    image.style.backgroundImage = `url(${root})`
  }

  observe() {
    this.observer = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        this.preloadImage(entry.target)
        imgObserver.unobserve(entry.target)
      })
    }, this.config)
  }

  init() {
    this.observe()
    return this.images.forEach((image) => {
      this.observer.observe(image)
    })
  }
}
