import React from 'react'
import { graphql } from 'gatsby'
import BeerList from '../components/BeersList'
import styled from 'styled-components'

const BeerGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

const SingleBeerStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: block;
    display: grid;
    align-items: center;
    font-size: 10px;
  }
`

export default function BeersPage ({ data }) {
  console.log(data)
  const beers = data.beers.nodes
  return (
    <>
      <h2 className='center' style={{ margin: `0 auto 2rem` }}>
        We have {beers.length} Beers Available. Dine in Only!
      </h2>
      <BeerGridStyles>
        {beers.map(beer => {
          const rating = Math.round(beer.rating.average)
          return (
            <SingleBeerStyles key={beer.id}>
              <img src={beer.image} alt={beer.name} />
              <h3>{beer.name}</h3>
              <p>{beer.price}</p>
              <p title={`${rating} out of 5 stars`}>
                {`⭐`.repeat(rating)}
                <span style={{ filter: `grayscale(100%)` }}>
                  {`⭐`.repeat(5 - rating)}
                </span>
                <span>({beer.rating.reviews})</span>
              </p>
            </SingleBeerStyles>
          )
        })}
      </BeerGridStyles>
    </>
  )
}

// Get the beer data to output on the page
export const query = graphql`
  query BeerQuery {
    beers: allBeer {
      nodes {
        id
        image
        name
        price
        rating {
          average
          reviews
        }
      }
    }
  }
`
