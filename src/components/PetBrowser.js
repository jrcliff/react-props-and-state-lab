import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">

    {this.props.petData.map(pet => {
      return <Pet pet={pet}/>
    })}
    </div>
  
  }
 

}


  export default PetBrowser
