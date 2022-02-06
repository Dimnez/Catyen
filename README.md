[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/Dimnez/Catyen) [![NPM Version](https://img.shields.io/npm/v/@catyen/catyen)]() [![NPM Downloads](https://img.shields.io/npm/dm/@catyen/catyen)]()  

<p align="center"><img src ="https://user-images.githubusercontent.com/5229028/152689240-fc1a85da-5743-4464-b5e8-da0d833b0ff2.png"></p>

# Catyen - (Ca)nvas (Ty)pescript (En)gine

Catyen is a lightweight wrapper to make the handling of canvas related programming more easy.

## Usage

```bash
npm install @catyen/catyen
```

```html
<canvas id ="canvas-element"></canvas>
```

```ts
import Catyen from '@catyen/catyen';

const catyen = new Catyen("#canvas-element",window);

// With the initialization call all required event handlers are set.
catyen.initialize();

catyen.loop.requestFrame(()=>{
    catyen.draw.clear("black");
    catyen.draw.print(0,0,"Hello World","white");
});
```

## Quick Start

The easyiest way to start is by using this [boilerplate](https://github.com/Dimnez/CatyenBoilerplate). 


# Features

## Game loop

Whenever the browser requests a frame, this loop is called. With each call, the screen is re-rendered.

```ts
import Catyen from '@catyen/catyen';

const catyen = new Catyen("#canvas-element",window);

catyen.loop.requestFrame(()=>{});

```

## Drawing

### Clear screen

```ts
 catyen.draw.clear("white");
```

### Print text 
```ts
 catyen.draw.print(0,0,"Hello World","white");
```

### Fill Rect 

```ts
 catyen.draw.fillRect(10,10,10,10,"white");
```

### Load and display images

```ts
const myImage = new CatyenImage("./path/img.png");

catyen.loop.requestFrame(()=>{
    catyen.draw.blit(0,0,myImage);
});
```

## Controls

### Keyboard 

```ts
const catyen = new Catyen("#canvas-element",window);

catyen.initialize();

catyen.loop.requestFrame(()=>{
    if(catyen.controls.isPressed(KeyboardKeys.UP))
    {
        console.log("up!");
    }
    
    if(catyen.controls.isPressed(KeyboardKeys.DOWN))
    {
        console.log("down!");
    }
});

```

### Mouse


```ts
const catyen = new Catyen("#canvas-element",window);

catyen.initialize();

catyen.loop.requestFrame(()=>{
    if(catyen.controls.mouseState.mouseDown)
    {
        console.log("mouse down!",
        catyen.controls.mouseState.clientX,
        catyen.controls.mouseState.clientY);
    }
});

```



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
