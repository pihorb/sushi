import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
import './home.sass'
import logo from '../../images/icons/logo-min.png'
import HomeMenuLinks from '../../components/home-menu-links/home-menu-links'
import HomePromotionLinks from '../../components/home-promotion-links/home-promotion-links'
import { Lazy } from '../../helpers'

function Home() {
  const [animate, setAnimate] = useState(true)

  const lazyImages = () => {
    new Lazy().init()
  }

  const repeatedAnimation = () => {
    const desc = document.getElementsByClassName('l-block1__description')
    const sub = document.getElementsByClassName('l-block1__sub-description')
    if (animate) {
      sub[0].classList.add('show')
      desc[0].classList.add('show')
      sub[1].classList.remove('show')
      desc[1].classList.remove('show')
    } else {
      sub[1].classList.add('show')
      desc[1].classList.add('show')
      sub[0].classList.remove('show')
      desc[0].classList.remove('show')
    }
    setAnimate(!animate)
    console.log(animate)
  }

  useEffect(() => {
    let interval = setTimeout(() => repeatedAnimation(), 3000)
    return () => clearInterval(interval)
  }, [animate])

  useEffect(() => {
    lazyImages()
  }, [])

  return (
    <div className='landing'>
      <div className='l-block1 block-bg' data-bg='landing/new_landing.jpg'>
        <div className='l-block1__content'>
          <div className='l-block1__description'>Онлайн замовлення</div>
          <div className='l-block1__sub-description'>
            Графік роботи: 11:00 - 23:00
          </div>
          <div className='l-block1__logo'>
            <img className='l-block1__img' src={logo} alt='logo' />
          </div>
          <div className='l-block1__description'>Щоденні акції та знижки</div>
          <div className='l-block1__sub-description'>
            Ми створюємо смачні спогади
          </div>
        </div>
      </div>

      <div className='l-block2 block-bg' data-bg='landing/landing2.jpg'>
        <div className='l-block2__content' data-aos='slide-right'>
          <div className='l-block2__title'>HOKKAIDO</div>
          <span className='l-block2__description'>Доставка Суші Львів</span>
          <p className='l-block2__info'>
            У нас працює швидкісна доставка суші, <br />
            яку ви зможете замовити за номерами телефону: <br />
            +38 (063) 614 0440 <br />
            +38 (096) 614 0440 <br />
            Графік роботи: <br />
            з 11:00 до 23:00 <br />
          </p>
        </div>
        <div className='l-block2__img' data-aos='slide-up'>
          <img data-image='landing/random-sushi.jpg' alt='sushi' />
        </div>
      </div>

      <div className='l-block3 block-bg' data-bg='landing/landing3.jpg'>
        <div className='l-block3__content'>
          <HomeMenuLinks />
        </div>
      </div>

      <div className='l-block4 block-bg' data-bg='landing/landing2.jpg'>
        <div className='l-block4__content'>
          <HomePromotionLinks />
        </div>
      </div>
    </div>
  )
}

export default Home
