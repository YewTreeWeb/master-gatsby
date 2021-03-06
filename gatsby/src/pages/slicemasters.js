import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Pagination from '../components/Pagination'
import Grid from '../components/CssGrid'

const PersonStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto 460px 250px;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  a {
    text-decoration: none;
  }
  h2,
  p {
    margin: 0;
  }
  h2 {
    text-align: center;
    transform: rotate(-2deg);
    font-size: 4rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }
  .description {
    background: var(--yellow);
    padding: 1rem;
    margin: 2rem;
    margin-top: -6rem;
    position: relative;
    z-index: 2;
    transform: rotate(1deg);
    text-align: center;
    height: fit-content;
  }
  .gatsby-image-wrapper {
    max-height: 460px;
  }
  &:hover {
    h2 {
      transform: rotate(2deg);
    }
    .description {
      transform: rotate(-2deg);
    }
  }
`

export default function SlicemastersPage ({ data, pageContext }) {
  const slicemasters = data.slicemasters.nodes
  return (
    <>
      <Pagination
        pageSize={process.env.GATSBY_PAGE_SIZE}
        totalCount={data.slicemasters.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base='/slicemasters'
      />
      <Grid size={'250px, 1fr'} rows={'auto auto 250px'}>
        {slicemasters.map(person => (
          <PersonStyles key={person.id}>
            <Link to={`/slicemaster/${person.slug.current}`}>
              <h2>
                <span className='mark'>{person.name}</span>
              </h2>
            </Link>
            <Img fluid={person.image.asset.fluid} />
            <p className='description'>{person.description}</p>
          </PersonStyles>
        ))}
      </Grid>
    </>
  )
}

export const query = graphql`
  query SlicemasterQuery($skip: Int = 0, $pageSize: Int = 4) {
    slicemasters: allSanityPerson(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        name
        slug {
          current
        }
        description
        image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
