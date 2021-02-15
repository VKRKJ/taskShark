import React, { Component } from 'react';
import Column from './column';
import './stylesheet/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredData: [],
    };
    
  }

  componentDidMount() {
    fetch('/')
      .then((res) => res.json())
      .then((data) => this.setState({ enteredData: enteredData.concat(data) }))
      .catch((err) => console.log('DATA FETCH ERROR'));
  }


  render() {
    const columnDisplay = [];
    const columnName = ['Backlog', 'Sprint', 'To Do', 'Doing', 'Review', 'Done'];
    for (let i = 0; i < 6; i++) {
      columnDisplay.push(<Column name={columnName[i]} key={i} />);
    }
    //check if column name is "blacklog, if it is, push Card component "
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
