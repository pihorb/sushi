import React from 'react'

export default function CreateNewDish({ products, toggleComponents }) {
  return (
    <ul className="ingredients">
      {products?.map((p, index) => (
        <li className="ingredients__item" onClick={() => toggleComponents(p)} key={index}>
          {p.name}
        </li>
      ))}
    </ul>
  )
}
