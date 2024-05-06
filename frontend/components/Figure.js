import React from 'react'

export default function Figure({imageurl, date}) {
    return (
      <figure>
        <img src={imageurl} />
        <figcaption>Awesome pic taken on {date}</figcaption>
      </figure>
    )
   }