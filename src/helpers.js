export class Lazy {
  constructor() {
    this.backgrounds = document.querySelectorAll('[data-bg], [data-image]')
    this.config = {
      root: null,
      rootMargin: '500px',
      threshold: 0,
    }
  }

  preloadImage(node) {
    if (!node) return false
    const background = node.getAttribute('data-bg')
    const img = node.getAttribute('data-image')
    const root = require(`./images/${img ? img : background}`)
    const $img = new Image()
    $img.src = root
    $img.onload = () => {
      if (background) {
        node.style.backgroundImage = `url(${$img.src})`
      }
      node.src = $img.src
      node.style.visibility = 'visible'
    }
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

  strartObseving() {
    this.backgrounds.forEach((bg) => {
      this.observer.observe(bg)
    })
  }

  init() {
    this.observe()
    this.strartObseving()
  }
}
