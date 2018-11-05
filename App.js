import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import Calendar from './Component/calendar'



const style = {
  position: "relative",
  margin: "50px auto"
}

class App extends Component {
  state={
      selectedDate:moment().format('D-MMMM-Y')
  }

    dateUpdate=(updatedDate)=>
    {
      this.setState({
        selectedDate:updatedDate
      })
   //   alert(updatedDate)
    }
  
  render() {
    return (
      <div className="App">
      
        <Calendar style={style} width="302px" 
          dateformat={'D-MMM-Y'}
          selectedDate={this.state.selectedDate}
          dateUpdate={this.dateUpdate}
          />  
          <div>   
          <input type='text'/>
          </div>

      </div>
    );
  }
}

export default App;
