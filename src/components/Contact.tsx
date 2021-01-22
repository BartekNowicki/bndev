import React from 'react';

const Contact = (props: any): JSX.Element => {
  return (
	<>
    <div className="daScroll">
    
        <div className="contactTextWrap">    
            <p className="bioTextTitleClass large">Nowicki, Bartek</p>
            <p className="bioTextTitleClass bioColor contactDetails">at your service!</p>
            <div className="phoneIcon"></div>
            <p className="bioTextTitleClass contactDetails">( +48 )  605 - 769 - 837</p>
            <div className="writeIcon"></div>
            <p className="bioTextTitleClass contactDetails">bartosznowickihq@gmail.com</p>
            
        </div>
    </div>
  </>
  );
}

export default Contact;