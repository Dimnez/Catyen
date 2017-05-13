"use strict";
class Tile {

	constructor(path, tileIndex) {
		this.imgobj = new Image();
		this.imgobj.src = path;
		this.imgobj.onload = () => {
			
			this.width = this.imgobj.naturalWidth;
			this.height = this.imgobj.naturalHeight;
		
			if(tileIndex !== undefined) {
				this.width = this.height;
				this.offsetX = this.width * tileIndex;
				this.offsetY = 0;
			} else {
				this.offsetX = 0;
				this.offsetY = 0;
			}
			
		
		}
		
	}
	
	getOffsetX() {
		return this.offsetX;
	}

}
