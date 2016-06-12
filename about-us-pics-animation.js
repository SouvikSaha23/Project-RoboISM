$(document).ready(function(){
	$("#about-us-img div div a img").hover(function(){
		console.log("Success!");
		$(this).animate({height: '+=3%',width: '+=3%',opacity: "0.5"},500);
		$(this).next().animate({fontSize: '+=15%'},500);
	},function(){
		$(this).animate({height: '-=3%',width: '-=3%',opacity: "1"},500);
		$(this).next().animate({fontSize: '-=15%'},500);
	});


});
