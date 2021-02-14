import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './column.js';
// import './stylesheet/styles.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {databaseInfo: []}
    this.getSix= this.getSix.bind(this);
  }
  componentDidMount() {
    // Simple GET request using fetch
    fetch('/routes')
        .then(response => response.json())
        .then(data => this.setState({ databaseInfo: data }))
        .catch(error => {
          this.setState({ errorMessage: error.toString() });
          console.error('There was an error!', error);
      });
      getSix(this.state.databaseInfo)
}


  render() {
  //   const arr
  const arr1 = []
  const arr2 = []
  const arr3 = []
  const arr4 = []
  const arr5 = []
  const arr6 = []
  function getSix (array){
    for(let i = 0; i <array.length; i++){
      if(array[0]["phases"] === 1){arr1.push(array[i])}
      if(array[0]["phases"] === 2){arr2.push(array[i])}
      if(array[0]["phases"] === 3){arr3.push(array[i])}
      if(array[0]["phases"] === 4){arr4.push(array[i])}
      if(array[0]["phases"] === 5){arr5.push(array[i])}
      if(array[0]["phases"] === 6){arr6.push(array[i])}
    }
  }


  //  const design = {
  //   gridTemplateColumns: 'repeat(4, 1fr)',

  //  }
   
    return (
      <div className="container" >
        <h2 id="appName">taskShark</h2>
        <h4 id="title">THAT IS GOING TO BE A TITLE</h4>
        <div style={{display: "grid", gridTemplateColumns : "1fr 1fr 1fr 1fr 1fr 1fr"}}>
        <Column className="Backlog" passedOn = {arr1} />
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
