import React, { Component } from 'react';
import './App.css';
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
// import svgArrow from '../pics/arrow.svg';




class App extends Component {
    state = {
      isAllLoaded : false,
      isSwiped : false,
      isAnyCloudActive : false,
      isDeviceMobile: false,
      
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

    //mark the cloud as clicked
    handleCloudClick = (cloudId) => {
      console.log('click: ', cloudId);
      const cloudDataCopy = [...this.state.cloudData];      
      cloudDataCopy.forEach(item => {
        if(item.id === cloudId) {
        item.isClicked = !item.isClicked
      }
      });
      const cloudDataCopyUpdated = cloudDataCopy;
      this.setState(prevState => (
        { cloudData : cloudDataCopyUpdated,
        }));
    }

    handleSwipe = () => {
      console.log('SWIPE!');
      this.setState(prevState => ({ isSwiped : true, }));
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
        // console.log('we have an active cloud or two!');     
        return true;
      }
      // console.log('no active clouds found...');
      return false;
    }  
    
    checkIfMobileDevice = () => {
      const checkedElement = document.querySelector('.mobileSwipe');
      if (checkedElement) {
        // console.log('checkedElement: ', checkedElement);
        const SwipeVisibility = window.getComputedStyle(checkedElement).getPropertyValue('display');
        // console.log('SwipeVisibility: ', SwipeVisibility);
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
              <Baloon className = "baloon1" ratioX = "0.1" ratioY = "0.7"/>
              <Baloon className = "baloon2" ratioX = "0.2" ratioY = "0.5"/>
              <Baloon className = "baloon3" ratioX = "0.3" ratioY = "0.3"/>
              <Baloon className = "baloon4" ratioX = "0.4" ratioY = "0.2"/>
              <Baloon className = "baloon5" ratioX = "0.5" ratioY = "0.1"/>
        </div>
        
        <Router>
          <div className="pageWrap">
                <Clouds data = {this.state.cloudData} handleCloudClick = {this.handleCloudClick}/>
                {this.state.isAnyCloudActive && <CloudsCloseBtn handleCloudCloseClick = {this.handleCloudCloseClick}/>}
                <NavLink to="/contact"><ContactIcon/></NavLink>
                <NavLink to="/"><House/></NavLink>
                <NavLink to="/bio"><Developer/></NavLink>                
                   
                   <section className="mainSectionWrap">
                        <Switch>
                        <Route path="/bndev/" exact component={()=> IntroAnimation(this.state.isSwiped)} />
                        <Route path="/" exact component={()=> IntroAnimation(this.state.isSwiped)} />
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
