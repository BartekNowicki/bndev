import React from 'react';

const MoreBtn = (props: any): JSX.Element => {
  return (
	<>
    <button className="moreBio">{props.textInside}</button>
    </>
  );
}

export default MoreBtn;
