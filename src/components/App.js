import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  onChangeType = (event) => {
    this.setState({      
      filters: {
      type: event.target.value
    }
  })
  }
  
  onFindPetsClick = () => {
    let url = ''
    if(this.state.type === 'all'){
      url = '/api/pets'
    }else{
      url = `/api/pets?type=${this.state.type}`
    }
    fetch(`${url}`)
    .then(resp => resp.json())
    .then(type => console.log({type}) )
  }
  
  render() {
    console.log()
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser petData={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
