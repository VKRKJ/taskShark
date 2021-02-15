import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

class Column extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //will be responsible for storing all of items that we can enter.
      input : []
    }
     this.addItem = this.addItem.bind(this)
  } 


  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value
      };
   
      this.setState((prevState) => {
        return { 
          input: prevState.input.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
      console.log(this.state.input);
      e.preventDefault();
    }

  }

  render() {
    return (
      <div className="allColumns">
        <h4 className="columnHead">{this.props.name}</h4>
        <div>
        <form onSubmit={this.addItem}>
          <input className="name" type="text" placeholder="add your Name here" />
          {/* /storing a reference to our input element in the appropriately named _inputElement property */}
          <input className="task" type="text" placeholder="add your task here" ref={(a)=> this._inputElement = a}  />
          <button className="button">add Ticket</button>
          </form>
          </div>
          {/* <EachTask entires={this.state.input}/> */}
      </div>

    );
  }
}
export default Column;
