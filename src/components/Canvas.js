import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Canvas extends Component {

    state = {
        stars: [{ id: 1, x : 0, y: 0, radius: 5, borderColor: 'white', fillingColor:'white' }],
        canvas: '',
        ctx: '',
        canvasWidth: '',
        canvasUnitsPerWidth: '',
        canvasHeight: '',
        canvasUnitsPerHeight: '',
        fillStyle: '',
        dpr: '',
      }      
      componentDidMount() {
        this.initCanvas();
        //need to wait before starting to draw for the state to be ready
        setTimeout(() => {
          this.createTheStars(10);
          
        }, 1000); 
        window.addEventListener('click', () => this.animateTheStars())
    }

    createATestRectangle = () => {
      const canvas = this.state.canvas;
      canvas.width = 1000;
      canvas.height = 1000;
      canvas.style.width = this.state.canvasWidth+"px";
      canvas.style.height = this.state.canvasHeight+"px";
      const ctx = this.state.ctx;
      ctx.fillStyle = 'red';
      ctx.scale(10,10);  //this is not required for the star!!!
      // possible to use ready made:
      // ctx.fillRect(0, 0, 200, 200);
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'blue';
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 50);
      ctx.lineTo(50, 50);
      ctx.lineTo(50, 0);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }

    addAStarToStarsInState = (star) => {
      let kopia = [...this.state.stars];
      // console.log('we have stars:', kopia.length);
      // console.log('our array of star objects: ', this.state.stars);
      let kopiaUpdated = [...kopia];
      kopiaUpdated.push({ id: kopia.length+1, x : star.x, y: star.y, radius: star.radius, borderColor: star.borderColor, fillingColor: star.fillingColor, });
      this.setState({stars: kopiaUpdated});
    }

    drawAllStarsFromState = () => {
      // console.log('drawing all stars from state');
      let kopia = [...this.state.stars];
      let context = this.state.ctx;
      // context.fillStyle = 'black';
      kopia.forEach(star => {
        context.save();
        context.fillStyle = star.fillingColor;      
        // console.log('drawing a ', star.fillingColor, 'star');
        context.beginPath();
        context.translate(star.x, star.y);
        context.moveTo(0, 0 - star.radius);
        context.translate(0, 0);
        context.moveTo(0, 0 - star.radius);
        for (let i = 0; i < 5; i++) {
          context.rotate((Math.PI / 180) * 36);
          context.lineTo(0, 0 - star.radius * 0.65);
          context.rotate((Math.PI / 180) * 36);
          context.lineTo(0, 0 - star.radius);
        }
        context.fill();
        context.restore();
      });
    }

    updateAStarInState = (starId) => {
      let kopia = [...this.state.stars];
      kopia.forEach(star => {
        if(star.id === starId){
          //  console.log('star found and will be updated');
           if (star.fillingColor !== 'red') { 
             star.fillingColor = 'red'
            } else star.fillingColor = 'white'
          //  star.radius = 10;
        }
      });
      this.setState({stars: kopia});
      this.drawAllStarsFromState();
    }

    createAStar = (star) => {
      this.addAStarToStarsInState(star);
      this.drawAllStarsFromState();
    }    
    
    createTheStars = (count) => {
        // console.log('creating the stars');
        const canvas = this.state.canvas;
        //introduce 1000 units into the space
        //if less the star will appear blurry!
        canvas.width = this.state.canvasWidth;
        canvas.height = this.state.canvasHeight;
        canvas.style.width = this.state.canvasWidth + "px";
        canvas.style.height = this.state.canvasHeight + "px";
        // console.log(this.state.canvasWidth, this.state.canvasHeight);
        const deltaX = this.state.canvasWidth/19;
        const deltaY = this.state.canvasHeight/19;
        // console.log(deltaX, deltaY);

        for (let i = 0; i < count-1; i++) {
          // let coordinateX = deltaX * i;
          // let coordinateY = deltaY * i;
          let coordinateX = Math.round(deltaX * Math.random()*20);
          let coordinateY = Math.round(deltaY * Math.random()*20);
          let randomRadius = Math.round(Math.random()*5 +2);

          setTimeout(()=>{
            this.createAStar({
              x: coordinateX, 
              y: coordinateY, 
              radius: randomRadius,
              borderColor: 'black',
              fillingColor: '#FFFA00'
            }); 
            // console.log('another star is born...', coordinateX, coordinateY, randomRadius);
          }, i*1000);
      }
    }
  
   initCanvas = () => {
      if (document.querySelector('canvas')) {
          const myCanvas = document.querySelector('canvas');
          if (!this.state.canvas) {
          this.setState({ canvas: myCanvas, canvasWidth: myCanvas.offsetWidth, canvasHeight: myCanvas.offsetHeight, ctx: myCanvas.getContext('2d'), fillStyle : 'black', dpr: window.devicePixelRatio, });
          // console.log('canvas identified: ', myCanvas);
        }
    } else { 
       console.log('canvas not detected!');
    }
   }

   animateTheStars = () => {

    //  console.log('animation in progress...');        
        // test star in upper left corner:  this.updateAStarInState(1);
        let randomStar = Math.floor(Math.random()*this.state.stars.length)
        this.updateAStarInState(randomStar+1);
        // console.log('animating star id: ', randomStar+1);
        //set this in motion to let the animation play
        // window.requestAnimationFrame(() => this.animateTheStars());                 
   }
 
  render() {
 
    return (
	  <>
    <canvas className="canvas"></canvas>
    </>
	);
  }
}

export default Canvas;


