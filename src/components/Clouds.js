import React from 'react';
import html5Logo from '../pics/html5.svg';
import css3Logo from '../pics/css3.svg';   
import javascriptLogo from '../pics/javascript.svg';   
import reactLogo from '../pics/react.svg';   
import nodejsLogo from '../pics/nodejs.svg';   
import expressLogo from '../pics/express.svg';   
import mongodbLogo from '../pics/mongodb.svg';   
import svgLogo from '../pics/svg.svg';
import scroll from '../pics/scroll.svg';

        

const logoArray = [html5Logo, css3Logo, javascriptLogo, reactLogo, nodejsLogo, expressLogo, mongodbLogo, svgLogo];

const Clouds = props => {
    const arrayOfClouds = props.data.map((cloud, index) => <div key = {cloud.id} className={cloud.cloudClass}><img className={cloud.cloudLogoClass} src={logoArray[index]} alt={cloud.logoAlt}/></div>);     
        
  return (
	  <>
    {arrayOfClouds}
    </>
  );
}

export default Clouds;
