import React, { useState, useEffect } from 'react'
import CreateListProducts from '../../components/create-list-products/create-list-products'
import CreateNewDish from '../../components/create-new-dish/create-new-dish'
import Button from '../../components/button/button'
import './create.sass'

export default function Create() {
  const [products, setFood] = useState([])
  const [components, setDishes] = useState([])
  const [dishName, setDishName] = useState('')

  useEffect(() => {
    fetch('http://localhost:3066/menu/products')
      .then((res) => res.json())
      .then(({ products }) => setFood([...products]))
  }, [])

  const toggleProducts = (item) => {
    setDishes([...components, item])
    removeFromList(item, products, setFood)
  }

  const toggleComponents = (item) => {
    setFood([...products, item])
    removeFromList(item, components, setDishes)
  }

  const removeFromList = (item, arr, cb) => {
    cb(arr.filter(f => f.name !== item.name))
  }

  const createNewDish = () => {
    // if(!dishName) return alert("Name field can't be empty")
    // if(!components.length) return alert("Components can't be empty")

    fetch('http://localhost:3066/menu/create', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        name: dishName,
        recipe: components,
      })
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(e => console.log(e))
  }

  return (
    <div className='create'>
      <div className='create__new'>
        <h2>Product</h2>
        <label className='create__label' htmlFor="fname">Enter sushi name:</label>
        <input type="text" id="fname" name="fname" onChange={({ target }) => setDishName(target.value)}/>
        <CreateNewDish products={components} toggleComponents={toggleComponents}/>
        <Button click={() => createNewDish()} value='Save'/>
      </div>
      <CreateListProducts toggleProducts={toggleProducts} products={products}/>
    </div>
  )
}
