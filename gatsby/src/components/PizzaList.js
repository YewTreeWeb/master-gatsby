import React from 'react'
import { Link } from 'gatsby'

const SinglePizza = ({ pizza }) => {
  return (
    <div>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2 className='name'>
          <span className='mark'>{pizza.name}</span>
        </h2>
        <p className='topping'>
          {pizza.toppings.map(topping => topping.name).join(', ')}
        </p>
      </Link>
    </div>
  )
}

export default function PizzaList ({ pizzas }) {
  return (
    <div>
      {pizzas.map(pizza => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </div>
  )
}
