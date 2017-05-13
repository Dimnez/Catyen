var keys = {
	"LEFT": 39,
	"RIGHT": 37,
	"UP": 38,
	"DOWN": 40,
	"ENTER": 13,
	"SPACE": 32,
	"ESCAPE": 27,
	"SHIFT": 16,
};

class CanvasElement {

	constructor(htmlElementId) {
		this.canvas = document.getElementById(htmlElementId);
		this.options = {
			"width": this.canvas.width,
			"height": this.canvas.height
		};
		
		this.context2D = this.canvas.getContext("2d");
		this.context2D.font = "10px Verdana";
				
		this.controls = {
		
			currentkeys: new Set(),
			onkeydown: (event) => {
				this.controls.currentkeys.add(event.keyCode);
			},
			onkeyup: () => {
				this.controls.currentkeys.delete(event.keyCode);
			},
			read: () => {
				return this.controls.currentkeys;
			},
			isPressed: (keyCode) => {
				return this.controls.currentkeys.has(keyCode);
			}
		};	
		
		//Keyboard-Event-Listener
		if (window.addEventListener) {
			window.addEventListener("keydown", this.controls.onkeydown, false);
			window.addEventListener("keyup", this.controls.onkeyup, false);
		} else if (window.attachEvent) {
			window.attachEvent("onkeydown", this.controls.onkeydown);
			window.attachEvent("onkeyup", this.controls.onkeyup);
		}		
	}
	
	fillRect(x, y, w, h, color) {
        this.context2D.fillStyle = color;
        this.context2D.fillRect(x, y, w, h);
    }
    
    clear(color) {
        this.fillRect(0, 0, this.options.width, this.options.height, color);
    }
    
    blit(x, y, image) {
        this.context2D.drawImage(image.imgobj, x, y);
    }
    
    tile(x, y, tile) {
    	var currentOffsetX = tile.getOffsetX(this.lastFrameTimestamp);
        this.context2D.drawImage(tile.imgobj, currentOffsetX, tile.offsetY, tile.width, tile.height, x, y, tile.width, tile.height);
    }
    
    print(x, y, text, color) {
        this.context2D.fillStyle = color;
        this.context2D.fillText(text, x, y);
    }    
    
    isPressed(keycode) {
    	return this.controls.isPressed(keycode);
    }
    
    loop(func) {
		this.lastFrameTimestamp = 0;
    	this.gamefunc = func;
		window.requestAnimationFrame((ts) => this.doRender(ts));
    }
    
    doRender(timestamp) {
        this.realFps = Math.round(1000 / (timestamp - this.lastFrameTimestamp));
        this.lastFrameTimestamp = timestamp;
        this.gamefunc(this);
        window.requestAnimationFrame((ts) => this.doRender(ts));
    }
    
    
}
