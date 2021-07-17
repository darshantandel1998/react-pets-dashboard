import React from "react";

class Table extends React.Component {
  render() {
    let filteredPets = this.props.pets
      .filter(pet => this.props.filter.city ? pet.city.match(new RegExp(this.props.filter.city, 'gi')) : true)
      .filter(pet => this.props.filter.animal ? pet.animal == this.props.filter.animal : true)
      .filter(pet => this.props.filter.breed ? pet.breed == this.props.filter.breed : true);

    return (
      <div className="table-responsive mt-3">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>City</th>
              <th>Animal</th>
              <th>Breed</th>
            </tr>
          </thead>
          <tbody>
            {filteredPets.map(pet => {
              return (
                <tr>
                  <td>{pet.id}</td>
                  <td>{pet.name}</td>
                  <td>{pet.city}</td>
                  <td>{pet.animal}</td>
                  <td>{pet.breed}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
