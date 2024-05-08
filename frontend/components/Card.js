import React from 'react'
import Figure from './Figure'
import styled from 'styled-components'

const StyledCard = styled.div`
background-color: blue;
color: lightyellow;
border: 2px solid black;
padding: 2rem;
border-radius: 12px;

h2 {
  margin: 0 0 1rem 0;
  font-size: 2.5em;
  color: black;
  font-style: italic;
}

p {
  margin: 0 0 1rem 0;

  &::first-line {
    font-size: 1.5em
  }
}
`




export default function Card({title, text, imageurl, date}) {
    return (
    <StyledCard className='card'>
      <h2>{title}</h2>
      <p>{text}</p>
      <Figure
        imageurl={imageurl}
        date={date}
      />
    </StyledCard>
    )
}