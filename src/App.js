import React, { useEffect, lazy, Suspense } from 'react'
import Nav from './components/nav-bar/nav-bar'
import Footer from './components/footer/footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AOS from 'aos'
import Spinner from './components/spinner/spinner'

const Home = lazy(() => import('./pages/home/home'))
const Menu = lazy(() => import('./pages/menu/menu'))
const Delivery = lazy(() => import('./pages/delivery/delivery'))
const Contacts = lazy(() => './pages/contacts/contacts')

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className='container'>
      <Router>
        <Nav />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/menu/:id' component={Menu} />
            <Route path='/delivery' component={Delivery} />
            <Route path='/contacts' component={Contacts} />
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </div>
  )
}

export default App
