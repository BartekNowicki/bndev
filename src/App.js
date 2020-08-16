import React, { Component } from 'react';
import './App.css';
import Developer from './components/Developer';
import Clouds from './components/Clouds';

class App extends Component {
    state = {
      cloudData: [{
        id: 1,
        cloudClass : 'cloudWrap1',
        cloudText: 'cloud1',
        isClicked: false,
        cloudLogoClass: 'cloudLogoClass1',
        logoAlt: 'HTML5', 
      },{
        id: 2,
        cloudClass : 'cloudWrap2',
        cloudText: 'cloud2',
        isClicked: false,
        cloudLogoClass: 'cloudLogoClass2',
        logoAlt: 'CSS3',
      },{
        id: 3,
        cloudClass : 'cloudWrap3',
        cloudText: 'cloud3',
        isClicked: false,
        cloudLogoClass: 'cloudLogoClass3',
        logoAlt: 'JAVASCRIPT',
      },{
        id: 4,
        cloudClass : 'cloudWrap4',
        cloudText: 'cloud4',
        isClicked: false,
        cloudLogoClass: 'cloudLogoClass4',
        logoAlt: 'REACT',
      },{
        id: 5,
        cloudClass : 'cloudWrap5',
        cloudText: 'cloud5',
        isClicked: false,
        cloudLogoClass: 'cloudLogoClass5',
        logoAlt: 'NODE',
      },{
        id: 6,
        cloudClass : 'cloudWrap6',
        cloudText: 'cloud6',
        isClicked: false,
        cloudLogoClass: 'cloudLogoClass6',
        logoAlt: 'EXPRESS',
      },{
        id: 7,
        cloudClass : 'cloudWrap7',
        cloudText: 'cloud7',
        isClicked: false,
        cloudLogoClass: 'cloudLogoClass7',
        logoAlt: 'MONGO',
      },{
        id: 8,
        cloudClass : 'cloudWrap8',
        cloudText: 'cloud8',
        isClicked: false,
        cloudLogoClass: 'cloudLogoClass8',
        logoAlt: 'SVG',
      }]
    }

    componentDidMount(){
      console.log('apka zmontowana');
    }
   
    render(){ 
      
    return (
        <>
        <div className="pageWrap">
        <Clouds data = {this.state.cloudData}/>     
        <Developer/>   
        </div>
        </>
    );
  }}

export default App;
