import React, {Component} from 'react'
import request from 'superagent'
import DogsList from './DogsList'

export default class DogsListContainer extends Component {
  state = { dogBreeds: null }

  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const breeds = Object.keys(response.body.message)
        this.updateBreeds(breeds)
      })
      .catch(console.error)
  }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    })
  }

  render() {
    return <DogsList dogBreeds={this.state.dogBreeds} />
  }
}


// We will work with two locations for now:

// / - index, on which we show the dogs list
// /dog-breeds/{name-of-dog-breed} - images of a specific dog breed
