$(document).ready(function() {
	createGrid(5, 5);
	boxHover();
});

var createGrid = function(rows, cols) {
	var width = (900 - cols * 2) / cols + 'px';
	var height = (600 - rows * 2) / rows + 'px';

	for (var i = 0; i < rows * cols; i++) {
		$('#grid-container').append('<div></div>');
	};

	$('div').css({height: height, width: width}).addClass('grid-box');
};

var boxHover = function() {
	$('.grid-box').hover(function() {
		$(this).css({'background-color': '#009933'})
	});
};