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


  componentDidMount() {
    
    // var requestOptions = {
    //   // mode: 'no-cors',
    //   method: 'GET',
    //   redirect: 'follow'
    // };
    
    fetch("/routes/tickets")
      .then(data => data.json())
      .then(data => console.log('THIS IS THE DATA WE ARE GETTING BACK -------->', data))
      // .then(response => response.text())
      // .then(result => console.log('resit;',result))
      .catch(error => console.log('error in APP.jS FETCH REQUEST ====>', error));
  


    // console.log("component did mount");
    // fetch('http://localhost:3000/routes')
    // .then((res) => console.log('RES.BODY IS HERE ->>>>>', res.body));
    //   // .then((res) => res.json())
    //   // .then((res) => console.log(res));
    //   // .then((data) => this.setState({ enteredData: enteredData.concat(data) }))
    //   // .catch((err) => console.log('DATA FETCH ERROR'));
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
