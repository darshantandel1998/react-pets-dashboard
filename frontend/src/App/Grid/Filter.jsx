import React from "react";

class Filter extends React.Component {
  state = this.props.filter;

  inputEventHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  filterApply = event => {
    this.props.updateFilter(this.state);
  };

  render() {
    return (
      <div className="row mt-3">
        <div className="col">
          <input type="text" className="form-control" placeholder="City" aria-label="City" name="city" value={this.state.city} onChange={this.inputEventHandler} />
        </div>
        <div className="col">
          <select className="form-select" aria-label="Animal" name="animal" value={this.state.animal} onChange={this.inputEventHandler}>
            <option value="">Animal</option>
            {this.props.option.animal.map(animal => {
              return <option value={animal}>{animal}</option>
            })}
          </select>
        </div>
        <div className="col">
          <select className="form-select" aria-label="Breed" name="breed" value={this.state.breed} onChange={this.inputEventHandler}>
            <option value="">Breed</option>
            {this.props.option.breed.map(breed => {
              return <option value={breed}>{breed}</option>
            })}
          </select>
        </div>
        <div className="col-1">
          <button type="button" class="btn btn-primary" onClick={this.filterApply}>Filter</button>
        </div>
      </div>
    );
  }
}

export default Filter;
