import React from 'react';
import html5Logo from '../pics/html5.svg';
import css3Logo from '../pics/css3.svg';   
import javascriptLogo from '../pics/javascript.svg';   
import reactLogo from '../pics/react.svg';   
import nodejsLogo from '../pics/nodejs.svg';   
import expressLogo from '../pics/express.svg';   
import mongodbLogo from '../pics/mongodb.svg';   
import svgLogo from '../pics/svg.svg';
import sassLogo from '../pics/sass.svg';
import webpackLogo from '../pics/webpack.svg';
import bootstrapLogo from '../pics/bootstrap.svg';

const logoArray = [html5Logo, css3Logo, sassLogo, javascriptLogo, reactLogo, webpackLogo, nodejsLogo, expressLogo, mongodbLogo, svgLogo, bootstrapLogo];

const Clouds = props => {

  const kopia = [...props.data];
  const half = Math.ceil(kopia.length / 2);
  const firstHalf = kopia.slice(0, half-1);
  const secondHalf = kopia.slice(half-1, kopia.length);
  
  const leftCloudsOnly = [...firstHalf];
  const rightCloudsOnly = [...secondHalf];

  const arrayOfLeftClouds = leftCloudsOnly.map((cloud, index) => 
    <div key = {cloud.id} className={cloud.isClicked ? cloud.cloudClass + ' activeCloud'+cloud.id : cloud.cloudClass}  onClick = {(e) => props.handleCloudClick(cloud.id)}><img className={cloud.cloudLogoClass} src={logoArray[index]} alt={cloud.logoAlt}/></div>);

  const arrayOfRightClouds = rightCloudsOnly.map((cloud, index) => 
    <div key = {cloud.id} className={cloud.isClicked ? cloud.cloudClass + ' activeCloud'+cloud.id : cloud.cloudClass}  onClick = {(e) => props.handleCloudClick(cloud.id)}><img className={cloud.cloudLogoClass} src={logoArray[index+half-1]} alt={cloud.logoAlt}/></div>);
    
    // console.log(arrayOfLeftClouds);
    // console.log(arrayOfRightClouds);    
  
  return (
	  <>
    <div className="leftCloudsWrap">{arrayOfLeftClouds}</div>    
    <div className="rightCloudsWrap">{arrayOfRightClouds}</div>    
    </>
  );
}

export default Clouds;
