# canvasElements

canvasElements is a lightweight wrapper to make the handling of canvas related *JavaScript* programming more easy.

## Build

Use [webpack](https://webpack.js.org/) to generate a single JS File.
```bash
npx webpack
```


## Usage

```html
<script src ="dist/release.js" type ="text/javascript"></script>
```

```js
let canvasElement = new CE("#canvasElement", window);

canvasElement.loop.requestFrame(() => {
    canvasElement.draw.clear();
    canvasElement.draw.print(20, 20, "Hello World", "white");
});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
