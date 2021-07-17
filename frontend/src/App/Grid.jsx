import React from "react";

import Filter from "./Grid/Filter";
import Table from "./Grid/Table";

class Grid extends React.Component {
  state = {
    pets: [],
    option: {
      city: [],
      animal: [],
      breed: []
    },
    filter: {
      city: '',
      animal: '',
      breed: ''
    }
  };

  updateFilter = (filter) => {
    this.setState({ filter: filter });
  }

  componentDidMount() {
    fetch("/pets")
      .then(res => res.json())
      .then(data => {
        this.setState({ pets: data });
        let option = { city: [], animal: [], breed: [] };
        data.map(pet => {
          option.city.push(pet.city);
          option.animal.push(pet.animal);
          option.breed.push(pet.breed);
        });
        Object.keys(option).map(key => {
          option[key] = option[key].filter((value, index, self) => self.indexOf(value) === index);
        });
        this.setState({ option: option });
      });
  }

  render() {
    return (
      <div className="container mt-3">
        <Filter option={this.state.option} filter={this.state.filter} updateFilter={this.updateFilter} />
        <Table pets={this.state.pets} filter={this.state.filter} />
      </div>
    );
  }
}

export default Grid;
