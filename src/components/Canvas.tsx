import React, { Component } from 'react';

type CanvasProps = {
  canvasElement: HTMLCanvasElement | null,
}

type CanvasState = {
  canvas: {
    width: number;
    height: number;
  }, 
  stars: any,
  canvasElement: HTMLCanvasElement | null,
  canvasWidth: number,
  canvasUnitsPerWidth: number,
  canvasHeight: number,
  canvasUnitsPerHeight: number,
  fillStyle: string,
  dpr: number,
}




class Canvas extends Component<CanvasProps, CanvasState> {

  constructor(props: CanvasProps) {
    super(props);
    this.state = {
      canvas: {width:0, height: 0},
      stars: [{ id: 1, x : 0, y: 0, radius: 5, borderColor: 'white', fillingColor:'white' }],
      canvasElement: this.props.canvasElement,   
      canvasWidth: 0,
      canvasUnitsPerWidth: 0,
      canvasHeight: 0,
      canvasUnitsPerHeight: 0,
      fillStyle: '',
      dpr: 0,
    } 
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
      const canvasElement = this.state.canvasElement;
      let ctx;
      if (canvas && canvasElement) {
        canvas.width = 1000;
        canvas.height = 1000;
        canvasElement.style.width = this.state.canvasWidth+"px";
        canvasElement.style.height = this.state.canvasHeight+"px";
        ctx = canvasElement.getContext('2d');
        if (ctx) {
          ctx.fillStyle = 'red';
          ctx.scale(10,10);  //this is not required for the star
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
      }      
    }

    addAStarToStarsInState = (star: { x: number; y: number; radius: number; borderColor: string; fillingColor: string; }) => {
      let kopia = [...this.state.stars];
      let kopiaUpdated = [...kopia];
      kopiaUpdated.push({ id: kopia.length+1, x : star.x, y: star.y, radius: star.radius, borderColor: star.borderColor, fillingColor: star.fillingColor, });
      this.setState({stars: kopiaUpdated});
    }

    drawAllStarsFromState = () => {
      let kopia = [...this.state.stars];
      // let context = this.state.ctx;


      const canvas = this.state.canvas;
      const canvasElement = this.state.canvasElement;
      let ctx: any;
      if (canvas && canvasElement) {
        canvas.width = 1000;
        canvas.height = 1000;
        canvasElement.style.width = this.state.canvasWidth+"px";
        canvasElement.style.height = this.state.canvasHeight+"px";
        ctx = canvasElement.getContext('2d');
        if (ctx) {
              kopia.forEach(star => {
              ctx.save();
              ctx.fillStyle = star.fillingColor;      
              ctx.beginPath();
              ctx.translate(star.x, star.y);
              ctx.moveTo(0, 0 - star.radius);
              ctx.translate(0, 0);
              ctx.moveTo(0, 0 - star.radius);
            for (let i = 0; i < 5; i++) {
              ctx.rotate((Math.PI / 180) * 36);
              ctx.lineTo(0, 0 - star.radius * 0.65);
              ctx.rotate((Math.PI / 180) * 36);
              ctx.lineTo(0, 0 - star.radius);
            }
            ctx.fill();
            ctx.restore();
            });
      }        
      }        
    }

    updateAStarInState = (starId: number) => {
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

    createAStar = (star: { x: number; y: number; radius: number; borderColor: string; fillingColor: string; }) => {
      this.addAStarToStarsInState(star);
      this.drawAllStarsFromState();
    }    
    
    createTheStars = (count: number) => {
        const canvas = this.state.canvas;
        //introduce 1000 units into the space
        //if less the star will appear blurry!
        const canvasElement = document.querySelector('canvas');
        if (canvas && canvasElement) {
          canvas.width = this.state.canvasWidth;
          canvas.height = this.state.canvasHeight;
          canvasElement.style.width = this.state.canvasWidth + "px";
          canvasElement.style.height = this.state.canvasHeight + "px";
        }
        
        const deltaX = this.state.canvasWidth/19;
        const deltaY = this.state.canvasHeight/19;
        
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
            }, i*1000);
      }
    }
  
   initCanvas = () => {

      if (document.querySelector('canvas')) {
        const myCanvas = document.querySelector('canvas');

          if (!this.state.canvas && myCanvas) {
            this.setState({ canvas: { width: myCanvas.offsetWidth, height: myCanvas.offsetHeight, } });
          }
      } else console.log('canvas not detected!'); 

   }   

   animateTheStars = () => {
  
        // test star in upper left corner:  this.updateAStarInState(1);
        let randomStar = Math.floor(Math.random()*this.state.stars.length)
        this.updateAStarInState(randomStar+1);

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


