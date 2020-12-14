import React from 'react'
import getAll from '../data/pets'
import getByType from '../data/pets'
import getBetweenAge from '../data/pets'
import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
    {this.props.petData.map(pet => {
  {/* if (this.filters.type === pet.type ) */}
      return <Pet pet={pet}/>
    })}
    </div>
  
  }
 

}


  export default PetBrowser
