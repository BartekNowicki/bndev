const SwipeIfMobile = (props: any): JSX.Element | null=> {
    let clientX: number | null = null;
    let clientY:number | null = null;
    let deltaX: number | null = null;
    let deltaY: number | null = null;
    const swipeBox = document.createElement('div');
    swipeBox.classList.add('mobileSwipe');
    swipeBox.addEventListener('touchstart', (e) => {
        if (clientX && clientY) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        }            
    });
    swipeBox.addEventListener('touchend', (e) => {
        if (clientX && clientY) {
            deltaX = e.changedTouches[0].clientX - clientX;
            deltaY = e.changedTouches[0].clientY - clientY;
            if (deltaX > 0 || deltaY > 0) {
                props.swipeHandler();
                document.body.removeChild(swipeBox);
            }
        }        
    });
    
    document.body.appendChild(swipeBox);

return null
}

export default SwipeIfMobile;

