import React from 'react'
import styled from 'styled-components'

const SubGridWrapper = styled.div`
  display: grid;
  /* grid-template-rows: auto auto 1fr; */
  /* Take your row sizing not from the SubGrid div, but from the Grid grid */
  /* @supports (grid-template-rows: subgrid) {
    grid-template-rows: subgrid;
  } */
  @supports not (grid-template-rows: subgrid) {
    --rows: ${props => props.rows};
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: ${props => props.gridRow};
  grid-gap: ${props => `${props.gap}rem`};
  h2,
  p {
    margin: 0;
  }
`

const SubGrid = ({
  rows = 'auto auto 1fr',
  gridRow = 'span 3',
  gap = '1',
  style,
  children
}) => {
  return (
    <SubGridWrapper rows={rows} gridRow={gridRow} gap={gap} style={style}>
      {children}
    </SubGridWrapper>
  )
}

export default SubGrid
