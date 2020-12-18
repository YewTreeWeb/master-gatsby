import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Grid from '../components/CssGrid'
import SubGrid from '../components/CssSubGrid'

const SinglePizza = ({ pizza }) => {
  return (
    <SubGrid>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2 className='name'>
          <span className='mark'>{pizza.name}</span>
        </h2>
      </Link>
      <p className='topping'>
        {pizza.toppings.map(topping => topping.name).join(', ')}
      </p>
      <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
    </SubGrid>
  )
}

export default function PizzaList ({ pizzas }) {
  return (
    <Grid size={'300px, 1fr'} gap={'4'}>
      {pizzas.map(pizza => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </Grid>
  )
}
