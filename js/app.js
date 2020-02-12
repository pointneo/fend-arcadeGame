// Enemies our player must avoid
class Enemy {
	constructor(x,y){
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x=x
	this.y=y
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

update(dt) {
	this.x+=2
  }

// Draw the enemy on the screen, required method for game
render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    if (this.x>=505)
    	{
    		this.x=0
    	}
    	collision(player,this)
};
};



let enemyA= new Enemy(-90,50)
let enemyB= new Enemy(200,200)
let enemyC= new Enemy(100,150)
let allEnemies=[];
allEnemies.push(enemyA)
allEnemies.push(enemyB)
allEnemies.push(enemyC)






//The player class in which we render & handle movements
class Player {
	constructor(x,y){
	 this.sprite = 'images/char-horn-girl.png'
     this.x=x
	 this.y=y
	
}
	update()
	{

	}
	render(){
		
			ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
		
	}
	
	handleInput(move)
	{
		//to handle movement
	switch (move)
		{
			case "up":
				if (this.y<=(50)) {this.y=(500)}
			this.y -=90
			break;
			case "down":
				if (this.y>=400) {this.y-=90}
			this.y +=90
			break;
			case "right":
				if (this.x >=410) {this.x=-100}
			this.x +=100
			break;
			case "left":
				if(this.x<(-1)) {this.x=506}
			this.x -=100
			break;
		}
	}
}


//the collision detection, courtesy of Mr abdullah

function collision(firstObject, secondObject){
	
	if (firstObject.x < secondObject.x + 60 &&
		firstObject.x + 30 > secondObject.x &&
		firstObject.y < secondObject.y + 40 &&
		60 + firstObject.y > secondObject.y) {
			firstObject.x = 202;
			firstObject.y = 405;
	};
}



let player = new Player(210,400)

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
