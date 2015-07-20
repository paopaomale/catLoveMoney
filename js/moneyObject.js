var moneyObj = function(){
	this.x;
	this.y;

	this.ySpeed=(Math.random()+1)*4 >> 0;//取整数
	this.timer = 0;
}

moneyObj.prototype.init =function(){
	this.x=Math.random()*W >> 0;
	this.y=-90*PositionY;
}

moneyObj.prototype.updata =function(){
	// this.timer +=renderTime;
	// if(this.timer>16){
		this.y += this.ySpeed;
		if(this.y>H){
			this.x=Math.random()*W >> 0;
			this.y=-imgMoneyH;
		}
	// 	this.timer =0;
	// }

}

moneyObj.prototype.checkCat =function(){
	if(this.y>H-70 && this.y<H){//catImgH+imgMoneyH=80
		if(this.x-catLeft<catImgW && this.x-catLeft>-imgMoneyW){
			score+=1;
			// drawScore();
			this.x=Math.random()*W >> 0;
			this.y=-imgMoneyH;
		}
	}
}

moneyObj.prototype.draw =function(){
	ctx.drawImage(imgMoney,this.x,this.y);
}

function drawS(){
	for(var i=0;i<num;i++){
		moneys[i].updata();
		moneys[i].checkCat();
	}
	for(var i=0;i<num;i++){
		moneys[i].draw();
	}
}
