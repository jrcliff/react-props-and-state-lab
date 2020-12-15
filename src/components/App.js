import React from "react"

import Filters from "./Filters"
import PetBrowser from "./PetBrowser"

const BASE_URL = '/api/pets'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }
    onFindPetsClick = async () => {

    let type = this.state.filters.type === 'all' ? '' : this.state.filters.type
    const resp = await fetch(`${BASE_URL}?type=${type}`)
    const pets = await resp.json()
    this.setState({pets: pets})
  }

  onChangeFilter = (filter) => {
    this.setState({
      filters: {
        type: filter
      }
    });
  };


  onAdoptPet = (petId) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet
    })
    this.setState({pets: pets})
  }

  render() {
    
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeFilter={this.onChangeFilter}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
