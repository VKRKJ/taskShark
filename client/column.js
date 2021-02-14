import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

class Column extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
        display: 'grid',
        border: '1px solid black',
        height: 500,
        width: 200,
        justifyItems: 'center',
       
      };
    return (
      <div>
        <p className="column" style={style}> Hello 
        <input className= "name"type="text" placeholder="add your Name here" style={{width: 120, height: 20}}></input>
        <input className= "task" type="text" placeholder="add your task here"></input>
        <button className = "button" style={{width: 150, height: 30, alignItems: "end"}}>add Ticket</button>
       </p>
      </div>

    );
  }
}
export default Column;
