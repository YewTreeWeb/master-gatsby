import React from 'react'
import styled from 'styled-components'

const GridWrapper = styled.section`
  display: grid;
  grid-template-columns: ${props =>
    `repeat(${props.columns}, minmax(${props.size}))`};
  grid-auto-rows: ${props => props.rows};
  gap: ${props => `${props.gap}rem`};
`

const Grid = ({
  columns = 'auto-fill',
  size = '250px, 1fr',
  rows = 'auto auto 500px',
  gap = '2',
  children
}) => {
  return (
    <GridWrapper columns={columns} size={size} gap={gap} rows={rows}>
      {children}
    </GridWrapper>
  )
}

export default Grid
