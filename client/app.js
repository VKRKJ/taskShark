import React, { Component } from 'react';
import Column from './column';
import './stylesheet/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredData: [],
    };
    // this.passOn = this.passOn.bind(this);
  }

  componentDidMount() {
    fetch('/routes/tickets')
      .then((data) => data.json())
      .then((newData) => {
        // console.log('THIS IS COMPONENTDIDMOUNT NEWDATA', newData);
        // , this.state.enteredData = data, console.log(this.state.enteredData))
        this.setState({
          enteredData: newData,
        });
        // console.log('this is state for sure', this.state);
      })
      // .then(response => response.text())
      // .then(result => console.log('resit;',result))
      .catch((error) => console.log('error in APP.jS FETCH REQUEST ====>', error));
  };
  


  render() {
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    const arr4 = [];
    const arr5 = [];
    const arr6 = [];
    const array = this.state.enteredData;
    // console.log('this is our state', this.state);
    // console.log('this is enteredData', this.state.enteredData);
    // console.log('THIS IS THE ARRAY THAT IS ENTEREDDATA', array);
    for (let i = 0; i < array.length; i++) {
      if (array[i].phases === '1') { arr1.push(array[i]); }
      if (array[i].phases === '2') { arr2.push(array[i]); }
      if (array[i].phases === '3') { arr3.push(array[i]); }
      if (array[i].phases === '4') { arr4.push(array[i]); }
      if (array[i].phases === '5') { arr5.push(array[i]); }
      if (array[i].phases === '6') { arr6.push(array[i]); }
    }
    const arrOfArrays = [arr1, arr2, arr3, arr4, arr5, arr6];
    
    const columnDisplay = [];
    const columnName = ['Backlog', 'Sprint', 'To Do', 'Doing', 'Review', 'Done'];
    for (let i = 0; i < 6; i++) {
      columnDisplay.push(<Column name={columnName[i]} key={i} columnNumber ={i+1} newData={arrOfArrays[i]} />);
    }
    // check if column name is "blacklog, if it is, push Card component "
    return (
      <div>
        <h2 id="appName">taskShark</h2>
        <h4 id="title">THAT IS GOING TO BE A TITLE</h4>
        <div className="container">
          {columnDisplay}
        </div>
      </div>

    );
  }
}

export default App;
