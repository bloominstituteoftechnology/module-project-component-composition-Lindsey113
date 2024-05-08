import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'
const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
 const [ apod, setApod ] = useState()
  
 
 useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      }).catch(err => {console.log(err.message)})
    }
      //fetchPhoto()
    setApod({
      "date": "2024-05-05",
      "explanation": "What happens to a star that goes near a black hole? If the star directly impacts a massive black hole, then the star falls in completely -- and everything vanishes. More likely, though, the star goes close enough to have the black hole's gravity pull away its outer layers, or disrupt, the star. Then, most of the star's gas does not fall into the black hole.  These stellar tidal disruption events can be as bright as a supernova, and an increasing amount of them are being discovered by automated sky surveys. In the featured artist's illustration, a star has just passed a massive black hole and sheds gas that continues to orbit.  The inner edge of a disk of gas and dust surrounding the black hole is heated by the disruption event and may glow long after the star  is gone.    Hole New Worlds: It's Black Hole Week at NASA!",
      "hdurl": "https://apod.nasa.gov/apod/image/2405/BhShredder_NASA_3482.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "A Black Hole Disrupts a Passing Star",
      "url": "https://apod.nasa.gov/apod/image/2405/BhShredder_NASA_1080"
    })
    
  }, [])
  if(!apod) return "Fetching Photo of the Day..."
  
  return (
    <section>
      <Card 
        title={apod.title}
        text={apod.explanation}
        imageurl={apod.url}
        date={apod.date}
        mediaType={apod.media_type}
      />
    </section>
  )
}

export default App
