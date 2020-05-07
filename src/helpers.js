
export function lazy() {
  const preloadImage = (img) => {
    if (!img) return
    const background = img.getAttribute('data-bg')
    const root = require(`./images/${background}`)
    img.style.backgroundImage = `url(${root})`
  }

  const images = document.querySelectorAll('[data-bg]')

  const config = {
    root: null,
    rootMargin: '300px',
    threshold: 0,
  }

  const observer = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      preloadImage(entry.target)
      imgObserver.unobserve(entry.target)
    })
  }, config)

  images.forEach((image) => {
    observer.observe(image)
  })
}

