import React, { Component } from 'react';
// import { DragDropContext } from 'react-beautiful-dnd';

class EachTask extends Component {
    
  render() {
    // taskCreator(newData)
console.log("hello this is the final props", this.props.finalData)
    return (
    <div className = "individualTicket">
      <div className = 'detailsTask'>
          {this.props.finalData.details}
      </div>
       <div className = 'personTask'>
       {this.props.finalData.person}
      </div>
   </div>

    );
  }
}
export default EachTask;
