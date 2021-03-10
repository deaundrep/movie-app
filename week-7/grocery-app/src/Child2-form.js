import React, { Component } from 'react'
import "./Child1-ul.css";

class Child2Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmitGrocery}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Enter Grocery
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Grocery"
                name="inputGroceryItem"
                onChange={this.props.handleOnChange}
                value={this.props.inputGroceryItem}
              />
            </div>
            <button className="btn btn-primary mb-3" type="submit">
              Submit
            </button>
          </form>
            )
        }
    }


export default Child2Form;