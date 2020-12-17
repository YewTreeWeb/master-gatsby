import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import slugify from 'slugify'

// Styles
const BeerGridStyles = styled.div`
  display: grid;
`
const BeerStyles = styled.div`
  display: block;
`

const SingleBeer = ({ beer }) => {
  const nameToSlug = slugify(beer.name, {
    replacement: '-',
    remove: /[$*_+~.()'"!\-:@]/g,
    lower: true
  })

  return (
    <BeerStyles data-id={beer.id}>
      <img src={beer.image} alt={beer.name} />
      <h2 className='name'>
        <span className='mark'>{beer.name}</span>
      </h2>
      <p>{beer.price}</p>
      <p className='ratings'>{beer.rating.average}</p>
    </BeerStyles>
  )
}

export default function BeerList ({ beers }) {
  return (
    <BeerGridStyles>
      {beers.map(beer => (
        <SingleBeer key={beer.id} beer={beer} />
      ))}
    </BeerGridStyles>
  )
}
