var ce = {};

ce.LEFT = 39;
ce.RIGHT = 37;
ce.UP = 38;
ce.DOWN = 40;
ce.ENTER = 13;
ce.SPACE = 32;
ce.ESCAPE = 27;
ce.SHIFT = 16;


ce.options = {
  canvasID : "", //ID of the Canvas-Object
  context2D : "",  //Canvas-Context
  fps : 30, //Mainloop-FPS (Setting)
  realfps : 0, //Mainloop-FPS (Setting)
  width:0, //Canvas-Element (width + height)
  height:0
};

ce.Image = function(src)
{
  this.path = src;
  this.imgobj = undefined;
  return this;
}

ce.Image.prototype.load = function(path)
{
   this.path = path;
   this.imgobj = new Image();
   this.imgobj.src= path;
   return this;
}

ce.controls = {
	currentkeys : new Set(),
	keydown : function(event){
		ce.controls.currentkeys.add(event.keyCode);
	},
	read : function()
	{
		return ce.controls.currentkeys;
	},
	isPressed : function(keyCode) {
		return ce.controls.currentkeys.has(keyCode);
	},
	keyup : function()
	{
		ce.controls.currentkeys.delete(event.keyCode);
	}
};
ce.screen = {
  lasftframeTimestamp : new Date().getTime(),
  fillRect : function(x,y,w,h,color)
  {
        ce.options.context2D.fillStyle=color;
        ce.options.context2D.fillRect(x,y,w,h);
  },
  clear : function(color)
  {
  ce.screen.fillRect(0,0,ce.options.width,ce.options.height,color);
  },
  loop : function(fps,func)
  {
    ce.options.fps = fps;
    setInterval(function(){
    ce.options.realfps = Math.round(1000/(new Date().getTime()-ce.screen.lasftframeTimestamp));
    ce.screen.lasftframeTimestamp = new Date().getTime();
    func();
  },
     1000/ce.options.fps);
  },
  blit : function(x,y,image)
  {
    ce.options.context2D.drawImage(image.imgobj,x,y);
  },
  tile : function(x,y,image,img_x,img_y,img_width,img_height,width,height)
  {
    ce.options.context2D.drawImage(image.imgobj,img_x,img_y,img_width,img_height,x,y,width,height);
  },
  init : function(id,width,height)
  {
    ce.options.canvasID = id;
    ce.options.width = width;
    ce.options.height = height;
    document.getElementById(id).width  = width;
    document.getElementById(id).height = height;
    ce.options.context2D = document.getElementById(id).getContext("2d");
  },
  print  : function(x,y,text,color)
  {
    ce.options.context2D.fillStyle=color;
    ce.options.context2D.font = "10px Verdana";
    ce.options.context2D.fillText(text,x,y);
  }
};

//Keyboard-Event-Listener
if (window.addEventListener)
{
   window.addEventListener("keydown", ce.controls.keydown, false);
   window.addEventListener("keyup", ce.controls.keyup, false);
 }
else if (window.attachEvent)
{
   window.attachEvent("onkeydown", ce.controls.keydown);
    window.attachEvent("onkeyup", ce.controls.keyup);
}
