import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure`
max-width: 60%;

figcaption {
  font-style: italic;
  color: silver;
}
`

export default function Figure({imageurl, date, mediaType}) {
    return (
      <StyledFigure>
        {mediaType === 'image' ? 
                <img src={imageurl} alt="Astronomy Picture of the Day" /> :
                <iframe src={imageurl} title="Astronomy Video of the Day"></iframe>
            }
        <figcaption>Awesome pic taken on {date}</figcaption>
      </StyledFigure>
    )
   }