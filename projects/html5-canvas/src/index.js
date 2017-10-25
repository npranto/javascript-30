let run = () => {
    const canvasElem = document.querySelector('#drawing-board');
    setCanvasEqualToWindowSize(canvasElem);
    const canvasContext = canvasElem.getContext('2d');
    customizeCanvasContext(canvasContext);

    let isDrawing = false;
    let lastCoordinateX = 0;
    let lastCoordinateY = 0;

    canvasElem.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            draw(canvasContext, lastCoordinateX, lastCoordinateY, e.offsetX, e.offsetY);
            lastCoordinateX = e.offsetX;
            lastCoordinateY = e.offsetY;
        }
    })
    canvasElem.addEventListener('mousedown', (e) => {
        isDrawing = true;
        lastCoordinateX = e.offsetX;
        lastCoordinateY = e.offsetY;
    })
    canvasElem.addEventListener('mouseup', (e) => {
        isDrawing = false;
    })
    canvasElem.addEventListener('mouseout', (e) => {
        isDrawing = false;
    })
}

let setCanvasEqualToWindowSize = (canvasElem) => {
    canvasElem.width = window.innerWidth;
    canvasElem.height = window.innerHeight;
}

let customizeCanvasContext = (context) => {
    context.strokeStyle = '#ff0000';
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.lineWidth = 20;
}

let draw = (context, lastCoordinateX, lastCoordinateY, currentCoordinateX, currentCoordinateY) => {
    context.beginPath();
    context.moveTo(lastCoordinateX, lastCoordinateY);
    context.lineTo(currentCoordinateX, currentCoordinateY);
    context.stroke();
}

//////////
run();