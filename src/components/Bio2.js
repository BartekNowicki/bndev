import React from 'react';
import svgArrow from '../pics/arrow.svg';

const Bio2 = props => {
  return (
	<>
    <div className="daScroll">
        
        <div className="bioTextWrap">
    
            <p className="bioTextTitleClass">When coding I ...</p>
            <p className="bioTextTitleClass bioColor">Aim for</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow" alt =""/>clean self-explanatory code</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow" alt =""/>accounting for all edge cases</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow" alt =""/>responsive design</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow" alt =""/>pleasing UX</p>
            <p className="bioTextTitleClass bioColor">Enjoy the most</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow" alt =""/>css tricks, effects and animations</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow" alt =""/>the power behind ES6 JS</p>
            <p className="bioTextClass"><img src={svgArrow} className="arrow" alt =""/>art and creativity</p>

            <p className="bioTextTitleClass bioColorRed">Reach out and let's talk!</p>

            <p className="bioTextTitleClass">I am currently working on</p>
            {/* <p className="bioTextClass small">https://www.konferencyjni.pl/</p>
            <p className="bioTextClass small">https://barteknowicki.github.io/OlgaTlumaczy/</p> */}
            
             <p className="bioTextClass small"><a href="https://www.konferencyjni.pl/" target="_blank">konferencyjni.pl</a></p> 
             <p className="bioTextClass small"><a href="https://barteknowicki.github.io/OlgaTlumaczy/" target="_blank">OlgaTlumaczy.pl</a></p> 
        </div>
    </div>
  </>
  );
}

export default Bio2;