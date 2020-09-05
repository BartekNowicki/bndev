import React, { Component } from 'react';

class Baloon extends Component {

  state = {
      deltaX : 0,
      deltaY : 0,
  }

  componentDidMount() {
      document.addEventListener('click', (event) => this.setNewBaloonPosition(event));
  }

  componentWillUnmount() {
    document.removeEventListener('click', (event) => this.setNewBaloonPosition(event));
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

  render() {
    const { deltaX, deltaY } = this.state;
    const { className } = this.props;
    return (
	<>
    <div
    className = {className} 
    style = {{transform: `translate(${deltaX}px, ${deltaY}px)`}} 
    />
    </>
	);
  }
}

export default Baloon;


