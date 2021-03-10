import React from "react";
import "./Child1-ul.css";

function Child1UL(props) {
  return (
    <ul>
      {props.groceryList.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <li>{item.grocery}</li>{" "}
            <button
              className="btn btn-warning button-style"
              onClick={() => props.handleIsDone(item.id)}
            >
              Done
            </button>
            <button
              className="btn btn-danger button-style"
              onClick={() => props.handleDeleteByID(item.id)}
              //onClick={this.handleDeleteByID(item.id)}
            >
              Delete
            </button>
            <br />
          </React.Fragment>
        );
      })}
    </ul>
  );
}

export default Child1UL;