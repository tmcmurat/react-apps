import React from 'react';
import logo from '../logo.svg';
import './App.css'; 
import List from './List';

class App extends React.Component{

  
  state={
    searchList:[
      {
        name:'Murat',
        tel:'111'
      },
      {
        name:'Ahmet',
        tel:'222'
      },
      {
        name:'Mehmet',
        tel:'333'
      },
      {
        name:'Ali',
        tel:'444'
      },
      {
        name:'Veli',
        tel:'555'
      },
      { 
        name:'Şeyma',
        tel:'666'
      },
      {
        name:'Aslı',
        tel:'777'
      },
      {
        name:'Merve',
        tel:'888'
      }
    ]
  }

  render(){  
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
 
        <List searchList = {this.state.searchList}></List>
      </header>
    </div>
    )
  }
}

export default App;
