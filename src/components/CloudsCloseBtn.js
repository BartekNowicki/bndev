import React from 'react';
import closeBtn from '../pics/closeBtn.svg';

const CloudsCloseBtn = props => {
  return (
	<>
    <div className="cloudsCloseBtn" onClick = {props.handleCloudCloseClick}><img className="cloudsCloseBtnImg" src={closeBtn} alt=""/></div>
  </>
  );
}

export default CloudsCloseBtn;