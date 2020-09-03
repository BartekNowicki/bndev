import React from 'react';

const SwipeIfMobile = (props) => {
    let clientX = null;
    let clientY = null;
    let deltaX = null;
    let deltaY = null;
    const swipeBox = document.createElement('div');
    swipeBox.classList.add('mobileSwipe');
    // swipeBox.innerText = "SWIPE TO UNLOCK";
    swipeBox.addEventListener('touchstart', (e) => {
        clientX = e.touches[0].clientX; 
        clientY = e.touches[0].clientY;
        // console.log('start: ', clientX, clientY);
    });
    swipeBox.addEventListener('touchend', (e) => {
        deltaX = e.changedTouches[0].clientX - clientX;
        deltaY = e.changedTouches[0].clientY - clientY;
        // console.log('deltaX: ', deltaX, 'deltaY: ', deltaY);
        if (deltaX > 0 || deltaY > 0) {
            document.body.removeChild(swipeBox);
            props.swipeHandler();
        }
    });
    document.body.appendChild(swipeBox);

return null
}

export default SwipeIfMobile;

