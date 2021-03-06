import React, { Component } from 'react';
import './scss/App.scss';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import Clouds from './components/Clouds';
import House from './components/House';
import Developer from './components/Developer';
import IntroAnimation from './components/IntroAnimation';
import Bio from './components/Bio';
import Bio2 from './components/Bio2';
import Contact from './components/Contact';
import ContactIcon from './components/ContactIcon';
import ErrorPage from './components/ErrorPage';
import CloudsCloseBtn from './components/CloudsCloseBtn';
import Loader from './components/Loader';
import SwipeIfMobile from './components/SwipeIfMobile';
import Baloon from './components/Baloon';
import ApiFriends from './components/ApiFriends';
import Canvas from './components/Canvas';

class App extends Component {
    state = {
      isAllLoaded : false,
      // isSwiped : false,
      isSwiped : true,
      isAnyCloudActive : false,
      isDeviceMobile: false,
      throttleIntroAnimations: true,      
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
        logoAlt: 'SCSS',
      
      },{
        id: 4,
        cloudClass : 'cloudWrap4',
        cloudText: 'cloud4',
        isClicked: false,
        cloudLogoClass: 'cloudLogoClass4',
        logoAlt: 'JS',
      
      },{
        id: 5,
        cloudClass : 'cloudWrap5',
        cloudText: 'cloud5',
        isClicked: false,
        cloudLogoClass: 'cloudLogoClass5',
        logoAlt: 'REACT',
      
      },{
        id: 6,
        cloudClass : 'cloudWrap6',
        cloudText: 'cloud6',
        isClicked: false,
        cloudLogoClass: 'cloudLogoClass6',
        logoAlt: 'WEBPACK',
      
      },{
        id: 7,
        cloudClass : 'cloudWrap7',
        cloudText: 'cloud7',
        isClicked: false,
        cloudLogoClass: 'cloudLogoClass7',
        logoAlt: 'NODEJS',
      
      },{
        id: 8,
        cloudClass : 'cloudWrap8',
        cloudText: 'cloud8',
        isClicked: false,
        cloudLogoClass: 'cloudLogoClass8',
        logoAlt: 'EXPRESS',
      
      },{
        id: 9,
        cloudClass : 'cloudWrap9',
        cloudText: 'cloud9',
        isClicked: false,
        cloudLogoClass: 'cloudLogoClass9',
        logoAlt: 'MONGO',
      
      },{
        id: 10,
        cloudClass : 'cloudWrap10',
        cloudText: 'cloud10',
        isClicked: false,
        cloudLogoClass: 'cloudLogoClass10',
        logoAlt: 'SVG',
      
      },{
        id: 11,
        cloudClass : 'cloudWrap11',
        cloudText: 'cloud11',
        isClicked: false,
        cloudLogoClass: 'cloudLogoClass11',
        logoAlt: 'BOOTSTRAP',
      
      }]
    }

    //mark the cloud as clicked
    handleCloudClick = (cloudId: number) => {
      const cloudDataCopy = [...this.state.cloudData];      
      cloudDataCopy.forEach(item => {
        if(item.id === cloudId) {
        item.isClicked = !item.isClicked
      }
      });
      const cloudDataCopyUpdated = cloudDataCopy;
      this.setState(prevState => (
        { cloudData : cloudDataCopyUpdated,
          throttleIntroAnimations: true,
        }));
    }

    handleSwipe = () => {
      // console.log('SWIPE!');
      this.setState(prevState => ({ isSwiped : true, isDeviceMobile: true, throttleIntroAnimations: false }));
    }
    
    handleCloudCloseClick = () => {
      const cloudDataCopy = [...this.state.cloudData];      
      cloudDataCopy.forEach(item => {item.isClicked = false});
      const cloudDataCopyUpdated = cloudDataCopy;
      this.setState(prevState => (
        { cloudData : cloudDataCopyUpdated,
        }));
    }

    componentDidMount(){
      console.log('The mounting is complete.');      
      window.addEventListener('load', () => {
        if (!this.state.isAllLoaded) this.setState({isAllLoaded: true});
        this.removeSwipeIfNotMobile();
      });
    }

    componentWillUnmount() {            
      window.removeEventListener('load', () => {
        if (!this.state.isAllLoaded) this.setState({isAllLoaded: true});
        this.removeSwipeIfNotMobile();
      });
    }

    componentDidUpdate(){
        if (this.checkIfAnyCloudActive()) {
           if (!this.state.isAnyCloudActive) this.setState({isAnyCloudActive: true})
        } else {
           if (this.state.isAnyCloudActive) this.setState({isAnyCloudActive: false})}
    }

    checkIfAnyCloudActive = () => {
      if (this.state.cloudData.filter(item => item.isClicked).length > 0){   
        return true;
      }
      return false;
    }  
    
    checkIfMobileDevice = () => {
      const checkedElement = document.querySelector('.mobileSwipe');
      if (checkedElement) {
        const SwipeVisibility = window.getComputedStyle(checkedElement).getPropertyValue('display');
        console.log('SwipeVisibility: ', SwipeVisibility);
        if (SwipeVisibility === 'none') {
          console.log('swipe exists but is invisible - this is a desktop');
          this.setState({isDeviceMobile: true});
        }
    }
    } 
    
    removeSwipeIfNotMobile = () => {
      console.log('trying to remove swipe if this is not a mobile device');
      this.checkIfMobileDevice();
      if (this.state.isDeviceMobile) {
          console.log('performing virtual swipe');
          this.handleSwipe();
      }
    };
    
   
    render(){ 

      if (!this.state.isAllLoaded) {
        return <Loader/>
      } else return (
        <>
        {!this.state.isSwiped && <SwipeIfMobile swipeHandler = {this.handleSwipe}/>}
        <div className="baloonArea">
              
              <Baloon color = "red" className = "baloon1Wrap" ratioX = "0.2" ratioY = "0.9"/>
              <Baloon color = "green" className = "baloon2Wrap" ratioX = "0.4" ratioY = "0.8"/>
              <Baloon color = "blue" className = "baloon3Wrap" ratioX = "0.6" ratioY = "0.6"/>
              <Baloon color = "yellow" className = "baloon4Wrap" ratioX = "0.8" ratioY = "0.4"/>
              <Baloon color = "brown" className = "baloon5Wrap" ratioX = "0.9" ratioY = "0.2"/>              
        </div>
        <ApiFriends/>
        {document.querySelector('canvas') && <Canvas canvasElement = {document.querySelector('canvas')}/>}
        <Router>
          <div className="pageWrap">
                <Clouds data = {this.state.cloudData} handleCloudClick = {this.handleCloudClick}/>
                {this.state.isAnyCloudActive && <CloudsCloseBtn handleCloudCloseClick = {this.handleCloudCloseClick}/>}
                <NavLink to="/contact"><ContactIcon/></NavLink>
                <NavLink to="/"><House/></NavLink>
                <NavLink to="/bio"><Developer/></NavLink>                              
                   
                   <section className="mainSectionWrap">
                        <Switch>
                          <Route path="/bndev/" exact component={()=> IntroAnimation([this.state.isSwiped, !this.state.throttleIntroAnimations])} />
                          <Route path="/" exact component={()=> IntroAnimation([this.state.isSwiped, !this.state.throttleIntroAnimations])} />
                          <Route path="/bio" component={Bio} />
                          <Route path="/bio2" component={Bio2} />
                          <Route path="/contact" component={Contact} />
                          <Route component={ErrorPage}/>
                        </Switch>
                   </section>
          </div>
        </Router>
        </>
    );
  }}

export default App;
