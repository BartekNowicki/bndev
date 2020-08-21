import React from 'react';

const ErrorPage = props => {
  return (
	<>
    <div className="daScroll">
        <div className="bioTextWrap">    
            <p className="bioTextTitleClass large">Sorry, this page is out of order...</p>
            <p className="bioTextTitleClass bioColor">I promise to fix it soon!</p>
            <div className="astro"></div>
        </div>
    </div>
  </>
  );
}

export default ErrorPage;