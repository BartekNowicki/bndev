// import React from 'react';

const SwipeIfMobile = (props) => {
    let clientX = null;
    let clientY = null;
    let deltaX = null;
    let deltaY = null;
    const swipeBox = document.createElement('div');
    swipeBox.classList.add('mobileSwipe');
    swipeBox.addEventListener('touchstart', (e) => {
        clientX = e.touches[0].clientX; 
        clientY = e.touches[0].clientY;
    });
    swipeBox.addEventListener('touchend', (e) => {
        deltaX = e.changedTouches[0].clientX - clientX;
        deltaY = e.changedTouches[0].clientY - clientY;
        if (deltaX > 0 || deltaY > 0) {
            props.swipeHandler();
            document.body.removeChild(swipeBox);
        }
    });
    
    document.body.appendChild(swipeBox);

return null
}

export default SwipeIfMobile;

