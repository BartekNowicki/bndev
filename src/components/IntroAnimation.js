import React from 'react';
// import { NavLink } from 'react-router-dom';

const text1 = 'my name is';
const text2 = 'Bartosz Nowicki';
const text3 = 'I am a';
const text4 = 'junior';
const text5 = 'web developer';
const text6 = 'feel free to'; 
const text7 = `clickAround();`;
const text8 = `.then(value => {`;
const text9 = `console.log("hired!")`;
const text10 = `});`;

const IntroAnimation = props => {
  const shouldIstartAnimations = props[0] && props[1];
  
  return (
	<>
  <div className="daScroll">
    <span className = "tekst1Class">{text1}</span>
    <span className = {shouldIstartAnimations ? "tekst2Class" : "tekst2Class animationPaused"} >{text2}</span>    
    <span className = "tekst3Class">{text3}</span>    
    <span className = {shouldIstartAnimations ? "tekst4Class" : "tekst4Class animationPaused"} >{text4}</span>  
    <span className = "tekst5Class">{text5}</span>
    <span className = "tekst6Class">{text6}</span>
    <div className="typeWrap">
      <span className = "tekst7Class"><span className = "innerSpanForCodeAnimationtekst7">{text7}</span></span>
      <span className = "tekst8Class"><span className = "innerSpanForCodeAnimationtekst8">{text8}</span></span>
      <span className = "tekst9Class"><span className = "innerSpanForCodeAnimationtekst9">{text9}</span></span>
      <span className = "tekst10Class"><span className = "innerSpanForCodeAnimationtekst10">{text10}</span></span>
    </div>
  </div>
  </>
  );
}

export default IntroAnimation;