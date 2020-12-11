import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    console.log(this.props.petData)
    return <div className="ui cards"><Pet /></div>
  }
}

export default PetBrowser
