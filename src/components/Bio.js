import React from 'react';
import svgArrow from '../pics/arrow.svg';
import { NavLink } from 'react-router-dom';
import MoreBtn from './MoreBtn';

const Bio = props => {
  return (
	<>
    <div className="daScroll"> 
        
        <div className="bioTextWrap">
    
            <p className="bioTextTitleClass">Are you looking to hire </p>            
            <p className="bioTextTitleClass">a junior web developer?</p>
            <p className="bioTextTitleClass bioColor">someone who</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow" alt=""/> is college educated</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow" alt=""/> pays great attention to detail</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow" alt=""/>shows creativity and critical thinking</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow" alt=""/>communicates well with the team</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow" alt=""/>is willing to 
            <span className="emphasizeBioItem"> learn</span>
            <span className="emphasizeBioItem"> fast</span>
            <span className="emphasizeBioItem"> and</span>
            <span className="emphasizeBioItem"> effectively</span></p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow" alt=""/>has a passion for coding and web dev</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow" alt=""/>is internally motivated with a drive to deliver</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow" alt=""/>appreciates a sense of humor</p>
            
            <NavLink to="/bio2"><MoreBtn className = "moreBio" textInside = "more..."/></NavLink>
        </div>
    </div>
  </>
  );
}

export default Bio;

