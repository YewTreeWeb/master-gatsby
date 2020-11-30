import React from 'react'
import { graphql } from 'gatsby'
import PizzaList from '../components/PizzaList'

export default function PizzaPage ({ data }) {
  console.log(data)
  const pizzas = data.pizzas.nodes
  return (
    <>
      <PizzaList pizzas={pizzas} />
    </>
  )
}

// Can name query or leave as annonomus
export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
