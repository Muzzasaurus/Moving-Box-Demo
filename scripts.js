// Initialising variables
dragging = false;
moveElement = "";

// Tells program if user is clicking and holding on a box
function activeDrag(elem) {
	dragging = true;
	moveElement=elem;
}
function deactiveDrag() {
	dragging = false;
	moveElement="";
}

// When user moves mouse, this function checks if they are trying to drag a box, if not, nothing will happen
window.onmousemove = function() {
	if (dragging == true) {
		// Finds width and height of element
		let width = e(moveElement).offsetWidth;
		let height = e(moveElement).offsetHeight;
		// Calculates limit values based on element size
		let xLimit = window.innerWidth*0.8-width;
		let yLimit = window.innerHeight*0.8-height;
		// Calculates X and Y the element should move to, centered on cursor
		let moveX = event.clientX-(window.innerWidth*0.1)-(width/2);
		let moveY = event.clientY-(window.innerHeight*0.1)-(height/2);
		// Checks if moveX or moveY are outside of limits
		if (moveX < 0) {
			moveX = 0;
		}
		if (moveX > xLimit) {
			moveX = xLimit;
		}
		if (moveY < 0) {
			moveY = 0;
		}
		if (moveY > yLimit) {
			moveY = yLimit;
		}
		// Moves boxes to moveX and moveY
		e(moveElement).style.left = `${moveX}px`;
		e(moveElement).style.top = `${moveY}px`;
	}
}

// Misc function
function e(element) {
	return document.getElementById(element);
}