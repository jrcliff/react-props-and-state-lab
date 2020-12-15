import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <button className="header">
            {this.props.gender === 'female' ? `♀` : `♂`}
            {this.props.petData.name}
          </button>
          <div className="meta">
            <span className="date">{this.props.petData.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petData.age}</p>
            <p>`Weight: {this.props.petData.weight} lbs</p>
          </div>
        </div>
        <div className="extra content">
          <button className={this.props.isAdopted ? "ui primary button" : "ui disabled button"}>Already adopted</button>
          <button onClick={() => this.props.onAdopt(this.props.petData)}className={this.props.petData.isAdopted ? "ui disabled button" : "ui primary button"}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
