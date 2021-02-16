import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import EachTask from './EachTask';

// eslint-disable-next-line react/prefer-stateless-function
class Column extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   //will be responsible for storing all of items that we can enter.
    //   input : []
    // }
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    const nameInput = document.getElementById('names').value;
    const descriptionInput = document.getElementById('description').value;
    const columnNamed = this.props.columnNumber
    console.log(nameInput);
    console.log(descriptionInput);

    const body = {
      descriptionInput,
      nameInput,
      columnNamed
    }

    fetch('/routes/create', { // sends a request to the routers
      headers: {
        'Content-Type': 'application/json', // because data is sent to database its in json
      },
      method: 'POST', // defining the type of request
      body: JSON.stringify(body), // asigning the body of the request to the inputs on the website
    });
  }

  render() {
    const allTaskArray = [];
    const array = this.props.newData;
    // console.log("here is our new props", array)
    for (let i = 0; i < array.length; i++) {
      allTaskArray.push(<EachTask id={i} finalData={array[i]} />);
    }
    console.log('all task array', allTaskArray);

    return (
      <div className="allColumns">
        <h4 className="columnHead">{this.props.name}</h4>
        <div>
          <div className="allTasks">
            {allTaskArray}
          </div>
          <form class="taskBox" onSubmit={this.addItem}>
            <input id="names" className="name" type="text" placeholder="add your Name here" />
            <input id="description" className="task" type="text" placeholder="add your task here" />
            <button type="submit" className="button">add Ticket</button>
          </form>
        </div>
      </div>
    );
  }
}
export default Column;
