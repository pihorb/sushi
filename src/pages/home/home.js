import React, { useEffect } from 'react'
import { TimelineLite, Power2 } from 'gsap'
import 'aos/dist/aos.css'
import './home.sass'
import logo from '../../images/icons/logo-min.png'
import sushi_img from '../../images/random-sushi.jpg'
import HomeMenuLinks from '../../components/home-menu-links/home-menu-links'
import HomePromotionLinks from '../../components/home-promotion-links/home-promotion-links'
import { lazy } from '../../helpers'

function Home() {
  const repeatedAnimation = () => {
    lazy('../../images/landing')
    const tl = new TimelineLite()

    tl.to('.l-block1__description', 1, {
      autoAlpha: 0,
      display: 'none',
      ease: Power2.easeInOut,
      delay: 5,
    })
      .to('.l-block1__sub-description', 1, {
        autoAlpha: 1,
        display: 'flex',
        ease: Power2.easeInOut,
      })
      .to('.l-block1__sub-description', 1, {
        autoAlpha: 0,
        ease: Power2.easeInOut,
        delay: 3,
      })
      .repeat(-1)
  }

  useEffect(() => repeatedAnimation(), [])

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
          <div className='l-block1__description'>
            Ми створюємо смачні спогади
          </div>
          <div className='l-block1__sub-description'>
            Щоденні акції та знижки
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
          <img src={sushi_img} alt='sushi' />
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
