$(document).ready(function() {
	var map = {
		0 : [],
		1 : [1.1],
		2 : [2],
		3 : [3],
		4 : [1.1,1.2,2],
		5 : [2,3],
		6 : [1.1,5],
		7 : [2,5],
		8 : [3,5],
		9 : [1.1,3,5],
		10 : [2,3,5],
		11 : [1.1,2,3,5],
		12 : [1.1,1.2,2,3,5]
	}

	var boxes = {
		1.1 : ".one-top",
		1.2 : ".one-bottom",
		2 : ".two-half-left",
		3 : ".three",
		5 : ".five"
	}

	var colors = {
		green: '#4CAF50',
		blue: '#03A9F4',
		white: '#FAFAFA',
		red: '#FF4436'
	}

	function clearAllBoxes() {
		for(i in boxes) {
			$(boxes[i]).animate({
				backgroundColor: colors.white
			},{ duration: 1000, queue: false } );
		}
	}

	function colorBoxes(hour, minutes) {
		var _hour = map[hour];
		var _minutes = map[minutes];
		var _both = _.intersection(_hour,_minutes);
		_hour.forEach(function(elem){
			if(_both.indexOf(elem)<0){
				$(boxes[elem]).animate({
					backgroundColor: colors.red
				},{ duration: 1000, queue: false } );
			}
		});

		_minutes.forEach(function(elem){
			if(_both.indexOf(elem)<0){
				$(boxes[elem]).animate({
				 	backgroundColor: colors.green
				},{ duration: 1000, queue: false } );
			}
		});

		_both.forEach(function(elem){
			$(boxes[elem]).animate({
				 backgroundColor: colors.blue
			},{ duration: 1000, queue: false } );
		});

	}
	
	function updateTime() {
		var date = new Date();
		var hour = date.getHours()%12;
		var minutes = Math.floor(date.getMinutes()/5);
		console.log(hour);
		console.log(minutes);
		clearAllBoxes();
		colorBoxes(hour,minutes);
	}

	updateTime();

	setInterval(updateTime,300000);
	
});