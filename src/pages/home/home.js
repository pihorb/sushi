import React, { useEffect } from 'react'
import { TimelineLite, Power2 } from 'gsap'
import 'aos/dist/aos.css'
import './home.sass'
import logo from '../../images/icons/logo-min.png'
import sushi_img from '../../images/random-sushi.jpg'
import LinkBox from '../../components/link-box/link-box'

function Home() {
  
  // const preloadImage = (img) => {
  //   console.log(img.classList)
  //   if (!img) return
  //   img.classList.add(`${img.classList[0]}-bg`)
  // }
  const repeatedAnimation = () => {
    // let images = document.querySelectorAll('[bg-img]')
    // let config = {
    //   root: null,
    //   rootMargin: '300px',
    //   threshold: 0,
    // }
    // let observer = new IntersectionObserver((entries, imgObserver) => {
    //   entries.forEach((entry) => {
    //     console.log(entry)
    //     if (!entry.isIntersecting) return
    //     preloadImage(entry.target)
    //     imgObserver.unobserve(entry.target)
    //   })
    // }, config)

    // images.forEach((image) => {
    //   observer.observe(image)
    // })

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

  useEffect(() => {
    repeatedAnimation()
  })

  // const bgImage = (name) => {
  //   const img = require(`../../images/landing/${name}.jpg`)
  //   return `url(${img}) no-repeat center fixed`
  // }

  return (
    <div className='landing'>
      
      <div className='l-block1' bg-img='true'>
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

      <div className='l-block2' bg-img='true'>
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

      <div className='l-block3' bg-img='true'>
        <div className='l-block3__content'>
          <LinkBox
            name='rolls'
            aos='slide-up'
            link='/menu/rolls'
            title='Роли'
          />
          <LinkBox name='sets' aos='slide-up' link='/menu/sets' title='Сети' />
          <LinkBox
            name='promotion'
            aos='slide-up'
            link='/menu/oberayte-5-roliv-platit-za-4'
            title='Акція'
          />
          <LinkBox
            name='nigiri'
            aos='slide-up'
            link='/menu/hunkans'
            title='Нігірі'
          />
          <LinkBox
            name='drinks'
            aos='slide-up'
            link='/menu/drinks'
            title='Напої'
          />
          <LinkBox
            name='extras'
            aos='slide-up'
            link='/menu/other'
            title='Додатки'
          />
        </div>
      </div>

      <div className='l-block4' bg-img='true'>
        <div className='l-block4__content'>
          <LinkBox
            name='promotion1'
            aos='slide-right'
            link='news/dostavka-sushi-dlya-vashogo-zadovolennya'
            title='Доставка суші для вашого задоволення'
            subtitle='Доставка суші для вашого задоволення. Доставка суші Львів – це швидка поставка смачних японських..'
            desc='2019-10-29 17:42:32'
          />
          <LinkBox
            name='promotion2'
            aos='slide-right'
            link='news/shvidka-ta-yakisna-dostavka-sushi-abo-garniy-chas-provedeniy-zi-smakom'
            title='Швидка та якісна доставка суші або гарний час, проведений зі смаком'
            subtitle='Наш онлайн ресторан Hokkaido пропонує своїм клієнтам замовити оригінальні суші у Львові за телефонами, які...'
            desc='2019-10-18 18:12:02'
          />
          <LinkBox
            name='promotion3'
            aos='slide-right'
            link='news/hokkaido-–-sushi-yaki-stvoryuyut-smachni-spogadi'
            title='HOKKAIDO – суші, які створюють смачні спогади'
            subtitle='Шановні гості нашого сайту, доставка HOKKAIDO Львів ніколи вас не підведе. Ми пропонуємо смачні, корисні страви...'
            desc='2019-09-19 20:10:32'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
