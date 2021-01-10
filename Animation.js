class Animation {

	constructor(path, animationLength) {
		this.imgobj = new Image();
		this.imgobj.src = path;	
		this.animationLength = animationLength;
		
		this.imgobj.onload = (function() {
			
			this.tilesize = this.imgobj.naturalHeight;
			this.width = this.tilesize;		
			this.height = this.tilesize;
			
			this.offsetY = 0;
			
			this.numberOfFrames = this.imgobj.naturalWidth / this.tilesize;			
			this.lengthOfOneFrame = this.animationLength / this.numberOfFrames;
			
			if(this.numberOfFrames !== Math.floor(this.numberOfFrames))
				throw "The width of your animation is not a multiple of its height."
			if(this.numberOfFrames === 0)
				throw "Zero frames detected in this animation. Your image is probably higher than wide."
		
		}).bind(this);
	}
	
	getOffsetX(frame) {
		if(frame === undefined)
			throw "Animation.getOffsetX(frame) needs the current game frame number!"
			
			
		var round = 	(frame % this.animationLength);
		var slow = round / this.lengthOfOneFrame;
			
		var frameIndex = Math.floor( slow)
		
    	return this.tilesize * frameIndex;	
	}

}
