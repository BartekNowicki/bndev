import React from 'react';
import svgArrow from '../pics/arrow.svg';
import { NavLink } from 'react-router-dom';

const Bio = props => {
  return (
	<>
    <div className="daScroll">
        <NavLink to="/bio2"><div className="redBlob"></div></NavLink>
        <div className="bioTextWrap">
    
            <p className="bioTextTitleClass">Are you looking to hire </p>
            
            <p className="bioTextTitleClass">a junior web developer?</p>
            <p className="bioTextTitleClass bioColor">someone who</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow"/> is college educated</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow"/> pays great attention to detail</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow"/>shows creativity and critical thinking</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow"/>communicates well with the team</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow"/>is willing to 
            <span className="emphasizeBioItem"> learn</span>
            <span className="emphasizeBioItem"> fast</span>
            <span className="emphasizeBioItem"> and</span>
            <span className="emphasizeBioItem"> effectively</span></p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow"/>has a passion for coding and web dev</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow"/>is internally motivated with a drive to deliver</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow"/>appreciates a sense of humor</p>
            <p className="bioTextTitleClass bioColor">reach out and let's talk!</p>
        </div>
    </div>
  </>
  );
}

export default Bio;