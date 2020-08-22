import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = props => {
  return (
	<>
    <div className="daScroll">
    <NavLink to="/bio"><div className="redBlob"></div></NavLink>
        <div className="bioTextWrap">    
            <p className="bioTextTitleClass large">Gone fishing...</p>
            <p className="bioTextTitleClass bioColor">I'll be back soon!</p>
            <div className="astro"></div>
        </div>
    </div>
  </>
  );
}

export default ErrorPage;