import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = props => {
  return (
	<>
    <div className="daScroll">
    
        <div className="contactTextWrap">    
            <p className="bioTextTitleClass large">Nowicki, Bartek</p>
            <p className="bioTextTitleClass bioColor contactDetails">at your service!</p>
            <div className="phoneIcon"></div>
            <p className="bioTextTitleClass contactDetails">( +48 )  605 - 769 - 837</p>
            <div className="writeIcon"></div>
            <p className="bioTextTitleClass contactDetails">bardo@bardo.com.pl</p>
            
        </div>
    </div>
  </>
  );
}

export default Contact;