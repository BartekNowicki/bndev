import React, { Component } from 'react';
import { TweenMax, TimelineMax } from 'gsap';
// import { TweenMax, TweenLite, TimelineMax, Linear, Back, Sine } from 'gsap';

class Baloon extends Component {
  // alternative class syntax, you can leave out the constructor 
  // and initialize the state as class field declaration
  state = {
      deltaX : 0,
      deltaY : 0,
      color : this.props.color,
  }
  myElement = null;
  myTween = null;
  colors = ['red', 'green', 'blue', 'darkblue', 'black', 'brown', 'coral', 'yellow','white','pink', 'orange'];

  componentDidMount() {
      document.addEventListener('click', (event) => this.setNewBaloonPosition(event));
      //need this tween for initiation when DOM mounted
      this.myTween = TweenMax.to(this.myElement, 1, {x: 0, y: 0});
      // console.log('myTween',this.myTween);
      this.animate();
  }

  componentWillUnmount() {
    document.removeEventListener('click', (event) => this.setNewBaloonPosition(event));
  }

  flickerBaloonMain = (element) => {
    let newColor = this.colors[Math.floor(Math.random()*this.colors.length)];
  // console.log(element);
  const tl = new TimelineMax({repeat: -1, yoyo: true, onRepeat: ()=>{
    // console.log('again!');
    newColor = this.colors[Math.floor(Math.random()*this.colors.length)];    
  }, paused:false});
  // new TimelineMax({repeat:1, onRepeat:repeatHandler, paused:true});
  tl
    .set(element, { transformOrigin: "50% 50%" })
    .to(element, { scaleY: 0.8, scaleX: 0.8, fill: newColor, duration: 10 })
     return tl;
}

flickerBaloonReflection = (element) => {
  // console.log(element);
  const tl = new TimelineMax({repeat:-1, yoyo: true, onRepeat: ()=>{}, paused:false});
  tl
    .set(element, { transformOrigin: "50% 100%" })
    .to(element, { scaleY: 0.8, scaleX: 0.8, fill: "transparent", duration: 10 })
     return tl;
}

waveBaloonRope = (element) => {
  // console.log(element);
  const tl = new TimelineMax({repeat:-1, yoyo: false, paused:false});
  tl
    .set(element, { transformOrigin: "0% 10%"})
    .to(element, { rotation: -10, duration: 10  })
    .to(element, { rotation: 0, duration: 10 })
     return tl;
}

stretchBaloonRope = (element) => {
  // console.log(element);
  const tl = new TimelineMax({repeat:-1, yoyo: true, paused:false});
  tl
    .to(element, { x:1, y: -4, duration: 10 })
    .to(element, { x:0, y: -10, duration: 10 })
     return tl;
}

  animate = () => {
    const master = new TimelineMax();
    master.add('start');
    // master.timeScale(5);
    if (!this.myElement.querySelector('#baloonMain')) {
      return console.log('baloons not detected!');
    } else {
      //not document.querySelector, but searching within the div only!
      const baloonPartOfSvg = this.myElement.querySelector('#baloonMain');
      const reflectionPartOfSvg = this.myElement.querySelector('#baloonReflection');
      const ropePartofSvg = this.myElement.querySelector('#baloonRope');
      // console.log('animating the baloon', baloonPartOfSvg);
      // console.log('animating the reflection', reflectionPartOfSvg);
      master.add(this.flickerBaloonMain(baloonPartOfSvg), "start");
      master.add(this.flickerBaloonReflection(reflectionPartOfSvg), "start");
      master.add(this.waveBaloonRope(ropePartofSvg), "start");
      master.add(this.stretchBaloonRope(ropePartofSvg), "start");      
      master.add(this.myTween, "start");
      // console.log(this.myTween);
    }
  }

  setNewBaloonPosition = (event) => {
      const { clientX, clientY } = event;
      const { ratioX, ratioY } = this.props;
    //   console.log('CLIENTX: ',clientX, 'CLIENTY: ', clientY);
      const screenCenterX = window.innerWidth / 2;
      const screenCenterY = window.innerHeight / 2;
      const deltaX = clientX - screenCenterX;
      const deltaY = clientY - screenCenterY;
      this.setState({
        deltaX : deltaX * -ratioX,
        deltaY : deltaY * -ratioY,
      });
  } 

  drawTheBaloon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 263.16 923.89">
  <g id="layer1" transform="translate(-651.28 -35.633)">
      <g id="g3237">
        <g id="g3965" transform="matrix(.72886 0 0 .72886 594.67 100.02)">
          <g id="g3797" transform="translate(-75.901 -162.06)">          
            <path id="baloonMain" fill = {this.state.color}
                  d="m334.12 91.969c-13.435 0.000003-26.549 2.0694-38.906 5.9688-12.357 3.8993-23.949 9.6016-34.625 16.844-10.676 7.2421-20.427 16.005-29.312 25.969-8.8854 9.9639-16.93 21.142-24.281 33.25-7.3511 12.108-14.011 25.157-20.125 38.969-6.114 13.811-11.685 28.386-16.531 43.656-4.8463 15.27-8.9841 31.235-11.969 47.938-2.9846 16.702-4.8044 34.146-4.8125 52.438-0.008 18.292 1.8436 36.574 5.625 54.844 3.7814 18.269 9.5052 36.501 16.844 54.562 7.3385 18.061 16.285 35.965 26.125 53.344 9.8402 17.378 20.558 34.246 31.312 50.188 10.755 15.941 21.514 30.936 31.594 44.469 10.079 13.532 19.45 25.589 27.844 35.625 8.3936 10.036 15.795 18.06 22.5 23.531 4.3146 3.5202 8.3569 5.9672 12.312 7.2812-4.0805 7.2643-8.8776 13.974-16.219 20.938 18.76-3.2214 25.452-0.38353 45.188 2.25-9.0267-6.2557-12.499-13.561-16.812-22.875 4.2537-1.2131 8.5733-3.7712 13.219-7.5625 6.6912-5.4609 14.068-13.472 22.438-23.5 8.3698-10.028 17.73-22.068 27.781-35.594 10.052-13.526 20.771-28.531 31.5-44.469s21.428-32.81 31.25-50.188c9.8216-17.377 18.764-35.249 26.094-53.312 7.3298-18.063 13.03-36.321 16.812-54.594 3.7829-18.273 5.6547-36.578 5.6562-54.875 0.002-18.297-1.8088-35.73-4.7812-52.438-2.9725-16.708-7.1015-32.693-11.938-47.969-4.836-15.276-10.392-29.84-16.5-43.656-6.1083-13.816-12.774-26.888-20.125-39-7.35-12.11-15.39-23.28-24.28-33.25s-18.63-18.73-29.31-25.97-22.3-12.94-34.66-16.842c-12.36-3.9-25.47-5.969-38.91-5.969z"/>
          </g>        
            <path id="baloonReflection" opacity = ".5" fill= "#ffffff"
            d="m307.71-49.233c102.62 90.994 99.78 239.97 90.26 328.22-5.47-87.82-34.33-192.89-112.83-256.42-64.711-52.375 2.6382-89.468 22.565-71.799z"/>
        </g>
            <path id="baloonRope" stroke = "red" strokeWidth = "2.1866" fill="none"
            d="m778.09 478.47 8.8541 0.37743c-6.9021 14.109-13.429 28.402-19.571 42.858-7.9339 18.674-15.259 37.733-19.306 57.615-4.0467 19.882-4.7158 40.732 0.59059 60.315 4.6071 17.002 13.508 32.459 21.165 48.323 7.6578 15.864 14.247 32.896 13.671 50.502-0.67203 20.553-11.067 39.607-23.638 55.881s-27.523 30.635-39.592 47.285c-24.408 33.675-36 76.408-31.956 117.8"/>
      </g>
  </g>
  </svg>
  }

  render() {
    const { deltaX, deltaY } = this.state;
    const { className } = this.props;
    return (
	<>
    {/* solution from gsap docs below */}
    <div ref={div => this.myElement = div} className = {className} style = {{transform: `translate(${deltaX}px, ${deltaY}px)`}}>
    {this.drawTheBaloon()}     
    </div>
    </>
	);
  }
}

export default Baloon;
