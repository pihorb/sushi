import React from 'react'
import './create-list-products.sass'

export default function CreateListProducts({ toggleProducts, products }) {
  return (
    <div className="ingredients">
      <h2>Ingredients</h2>
      <ul className="ingredients__list">
        {products?.map((f) => (
          <li
            className="ingredients__item"
            onClick={() => toggleProducts(f)}
            key={f.id}
          >
            {f.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
