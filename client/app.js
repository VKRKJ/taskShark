import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './column.js';
// import './stylesheet/styles.css';



class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ar
  
   const design = {
    gridTemplateColumns: 'repeat(4, 1fr)',

   }
   
    return (
      <div className="container" style={{display: "grid", gridTemplateColumns : "1fr 1fr 1fr 1fr 1fr 1fr"}}>
        <h2 id="appName">taskShark</h2>
        <h4 id="title">THAT IS GOING TO BE A TITLE</h4>
        <div>
        <Column className="Backlog" />
        <Column className="Sprint"/>
        <Column className="To Do"/>
        <Column className="Doing" />
        <Column className="Review"/>
        <Column className="Done"/>
        </div>
      </div>
    );
  }
}


// class Board extends Component {
   
//   render (){
   




//     return(
//       <div style: 

//     )
//   }
// }

export default App;
