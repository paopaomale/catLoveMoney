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
	}
}

moneyObj.prototype.checkCat =function(){
	if(this.y>H-85 && this.y<H){
		if(this.x-catLeft<45 && this.x-catLeft>-66){
			score+=1;
			drawScore();
			this.x=Math.random()*W;
			this.y=-30;
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
		moneys[i].draw();
	}
}
