import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogsListContainer from './components/DogsListContainer'
import DogsList from './components/DogsList'
import DogBreedImages from './components/DogBreedImages'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'
import { Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        
          <h1>No ballsy logo?</h1>
          <main>
      
        <Route exact path="/" component={DogsListContainer} />
        <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
        <Route path="/dog-breeds/:breed" component={DogBreedImages} />
     
        </main>
        

      </div>
    );
  }
}

export default App;
