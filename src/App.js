import React, { Component } from 'react';
import './App.css';
import Developer from './components/Developer';

class App extends Component {

    state = {}

    componentDidMount(){
      console.log('apka zmontowana');
    }

   
    render(){ 
      
    return (
        <>
        <div className="pageWrap">
        <Developer/>   
        </div>
        </>
    );
  }}

export default App;
