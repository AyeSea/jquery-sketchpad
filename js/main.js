$(document).ready(function() {
	createGrid(5, 5);
	boxHover();
});

function createGrid(rows, cols) {
	var width = (900 - cols * 2) / cols + 'px';
	var height = (600 - rows * 2) / rows + 'px';

	for (var i = 0; i < rows * cols; i++) {
		$('#grid-container').append('<div></div>');
	};

	$('#grid-container').children('div').css({height: height, width: width}).addClass('grid-box');
};

function boxHover() {
	$('.grid-box').hover(function() {
		$(this).css({'background-color': '#009933'})
	});
};

function resetGrid() {
	var response = confirm("Are you sure you want to reset the grid?");
	
	if (response === true) {
		$('.grid-box').remove();

		var rows = prompt("Enter the new number of rows:");
		var cols = prompt("Enter the new number of columns:");

		createGrid(rows, cols);
		boxHover();
	};
};

function randomizeColors() {
	$('.grid-box').hover(function() {

		var red = Math.ceil(Math.random() * 255);
		var green = Math.ceil(Math.random() * 255);
		var blue = Math.ceil(Math.random() * 255);

		$(this).css({'background-color': 'rgb(' + red + ',' + green + ',' + blue + ')'});

	});
};