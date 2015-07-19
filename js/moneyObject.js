var moneyObj = function(){
	this.x;
	this.y;

	this.ySpeed=(Math.random()+1)*2;
}

moneyObj.prototype.init =function(){
	this.x=Math.random()*W;
	this.y=-90*PositionY;
}

moneyObj.prototype.updata =function(){
	this.y += this.ySpeed;
	if(this.y>H){
		this.x=Math.random()*W;
		this.y=-30;
		PositionY--;
	}
}

moneyObj.prototype.draw =function(){
	ctx.drawImage(imgMoney,this.x,this.y);
}

function drawS(){
	for(var i=0;i<num;i++){
		moneys[i].updata();
		moneys[i].draw();
	}
}
