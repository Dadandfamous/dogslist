import React from 'react'
import { Link } from 'react-router-dom'

export default function Link (props) {
  return (
    <div>
    
      <Route path="/dog-breeds/:breed" component={DogBreedImages} /> 
      <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} /> 
    </div>
  )
}