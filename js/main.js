var can,
	ctx,
	W,
	H,
	catImgW=37,
	catImgH=48,
	imgMoneyW=50,
	imgMoneyH=32,
	num= 18,
	moneys=[],
	imgMoney=new Image(),
	PositionY= 0,
	catLeft,
	score = 0;

$(function init(){
	can= document.getElementById("canvas");
	ctx= can.getContext("2d");

	W = $(window).width();
	H = $(window).height();
	can.width = W;
	can.height = H;
	can.style.background='#FF9588';
	num = parseInt(W/100*2.5);

	// drawBackground();
	imgMoney.src='img/money.png';
	for(var i=0;i<=num;i++){
		var obj = new moneyObj();
		moneys.push(obj);
		PositionY++;
		moneys[i].init();
	}
	gameloop();

})

function drawBackground(){
	ctx.fillStyle = '#FF9588';
}

function drawScore(){
	ctx.fillStyle="red";
	ctx.font="20px Arial";
	ctx.fillText(score,50,50);
}

function gameloop(){
	window.requestAnimationFrame(gameloop);
	// drawBackground();
	ctx.clearRect(0,0,W,H);
	drawScore();
	catLeft = $('.catImg').position().left;
	drawS();
	
}
$('body').click(function(e) {
	// var moveLeft = e.clientX-$('.catImg').position().left;
	$('.catImg').css({'left':e.clientX});

});


//浏览器兼容处理  
// var requestAnimationFrame = (function(){  
// return window.requestAnimationFrame ||  
//		window.webkitRequestAnimationFrame ||  
//		window.mozRequestAnimationFrame ||  
//		window.oRequestAnimationFrame ||  
//		window.msRequestAnimationFrame || function(callback) {  
//		window.setTimeout(callback, 1000 / 60);  
// };  
// })();