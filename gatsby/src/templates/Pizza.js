import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const PizzaGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

// Destructuring two levels deep
export default function SinglePizzaPage ({ data: { pizza } }) {
  // Destructuring one level
  // const { pizza } = data
  return (
    <PizzaGrid>
      <Img fluid={pizza.image.asset.fluid} />
      <h2 className='mark'>{pizza.name}</h2>
      <ul>
        {pizza.toppings.map(topping => (
          <li key={topping.id}>{topping.name}</li>
        ))}
      </ul>
    </PizzaGrid>
  )
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`
