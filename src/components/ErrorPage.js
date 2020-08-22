import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = props => {
  return (
	<>
    <div className="daScroll">
    <NavLink to="/bio"><div className="redBlob"></div></NavLink>
        <div className="bioTextWrap">    
            <p className="bioTextTitleClass large">Gone fishing...</p>
            <p className="bioTextTitleClass bioColor">Click my head and I'll be back!</p>
            <div className="astro"></div>
        </div>
    </div>
  </>
  );
}

export default ErrorPage;