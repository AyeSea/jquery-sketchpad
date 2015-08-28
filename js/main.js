var mouseIsDown = false;
var colorSelection = 'default';
var color = 'rgb(125, 125, 125)';

$(document).ready(function() {
	setupGrid(25, 25);
});

function setupGrid (rows, cols) {
  mouseIsDown = false;
	colorSelection = 'default';
	color = 'rgb(125, 125, 125)';

	createGrid(rows, cols);
	boxHover();
	startDrawing();
	finishDrawing();
}

function createGrid(rows, cols) {
	var width = (800 - cols * 2) / cols + 'px';
	var height = (600 - rows * 2) / rows + 'px';

	for (var i = 0; i < rows * cols; i++) {
		$('#grid-container').append('<div></div>');
	};

	$('#grid-container').children('div').css({height: height, width: width}).addClass('grid-box');
};

function boxHover() {
	$('.grid-box').hover(function() {

		if (mouseIsDown === true) {

			if (colorSelection === 'default' || colorSelection === 'userColor') {
				$(this).css({'background-color': color});
			}

			else if (colorSelection === 'random') {
				$(this).css({'background-color': randomizeColors()});
			};
		};


	});
};


function startDrawing() {
	$('.grid-box').mousedown(function() {

		mouseIsDown = true;
	});
};

function finishDrawing() {
	$('.grid-box').mouseup(function() {
		mouseIsDown = false;
	});
};

function resetGrid() {
	var response = confirm("Are you sure you want to reset the grid?");
	
	if (response === true) {
		$('.grid-box').remove();

		var rows = prompt("Enter the new number of rows:");
		var cols = prompt("Enter the new number of columns:");

		setupGrid(rows, cols);
	};
};

function randomizeColors() {
		colorSelection = 'random';

		var red = Math.ceil(Math.random() * 255);
		var green = Math.ceil(Math.random() * 255);
		var blue = Math.ceil(Math.random() * 255);

		return 'rgb(' + red + ',' + green + ',' + blue + ')';
};

function selectColor() {
		colorSelection = 'userColor';
		var red = prompt("RGB - Select a value from 0-255 for RED:");
		var green = prompt("RGB - Select a value from 0-255 for GREEN:");
		var blue = prompt("RGB - Select a value from 0-255 for BLUE:");

		color = 'rgb(' + red + ',' + green + ',' + blue + ')';
};

function toggleGridOutline() {

	if ( $('.grid-box').css('border-color') === 'rgb(136, 136, 136)' ) {
		$('.grid-box').css({'border-color': 'transparent'});
	}

	else {
		$('.grid-box').css({'border-color': 'rgb(136, 136, 136)'});
	};
};