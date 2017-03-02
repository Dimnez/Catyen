
var celements = {};

celements.options = {
  canvasID : "", //ID of the Canvas-Object
  context2D : "",  //Canvas-Context
  fps : 30, //Mainloop-FPS (Setting)
  realfps : 0 //Mainloop-FPS (Setting)
};

celements.Image = function(src)
{
  this.path = src;
  this.imgobj = undefined;
  return this;
}

celements.Image.prototype.load = function(path)
{
   this.path = path;
   this.imgobj = new Image();
   this.imgobj.src= path;
   return this;
}

celements.screen = {
  lasftframeTimestamp : new Date().getTime(),
  fillRect : function(x,y,w,h,color)
  {
        celements.options.context2D.fillStyle=color;
        celements.options.context2D.fillRect(x,y,w,h);
  },
  clear : function()
  {
    celements.options.context2D.clearRect(0, 0, 480, 272);
  },
  loop : function(fps,func)
  {
    celements.options.fps = fps;
    setInterval(function(){

    celements.options.realfps = 1000/(new Date().getTime()-celements.screen.lasftframeTimestamp);

    func();
  },
     1000/celements.options.fps);
  },
  blit : function(x,y,image)
  {
    celements.screen.lasftframeTimestamp = new Date().getTime();
    celements.options.context2D.drawImage(image.imgobj,x,y);
  },
  init : function(id)
  {
    celements.options.canvasID = id;
    document.getElementById(id).width  = 480;
    document.getElementById(id).height = 272;
    celements.options.context2D = document.getElementById(id).getContext("2d");
  },
  print  : function(x,y,text,color)
  {
    celements.options.context2D.fillStyle=color;
    celements.options.context2D.font = "10px Verdana";
    celements.options.context2D.fillText(text,x,y);
  }
};
