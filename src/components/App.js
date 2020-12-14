import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }
  onChangeType = (event) => {
    this.setState({
      filters: {
        type: {...this.state.filters,
          type: event.target.value
      },
    });
  };

  onFindPetsClick = () => {
    let url = this.state.filters.type === 'all' ? '' : ('?type=' + this.state.filters)
    fetch(`localhost:3000/api/pets${url}`)
      .then((resp) => resp.json())
      .then((newPet) => this.setState({ pets: newPet}));
  };

  render() {
    console.log();
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={() => this.onChangeType()}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser petData={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
