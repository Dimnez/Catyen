import {
  default as CatyenImage,
  default as CEImage,
} from "../Models/CatyenImage";
import CEFeatureBase from "./FeatureBase";

class DrawingsFeature extends CEFeatureBase {
  initialize() {
    this.initialized = true;
  }

  setEvents(window: Window) {}

  fillRect(x: number, y: number, w: number, h: number, color: string) {
    this.configuration.canvasElement2DContext.fillStyle = color;
    this.configuration.canvasElement2DContext.fillRect(x, y, w, h);
  }

  drawCircle(x: number, y: number,radius : number, color: string) {
    this.configuration.canvasElement2DContext.fillStyle = color;
    this.configuration.canvasElement2DContext.beginPath();
    this.configuration.canvasElement2DContext.arc(x, y, radius, 0, 2 * Math.PI);
    this.configuration.canvasElement2DContext.fill();
  }

  fillRectAndRotate(
    x: number,
    y: number,
    w: number,
    h: number,
    color: string,
    angle: number
  ) {
    this.configuration.canvasElement2DContext.save();
    this.configuration.canvasElement2DContext.translate(
      x + w * 0.5,
      y + h * 0.5
    );
    this.configuration.canvasElement2DContext.rotate(angle * 0.01745);
    this.configuration.canvasElement2DContext.translate(-w * 0.5, -h * 0.5);
    this.configuration.canvasElement2DContext.fillStyle = color;
    this.configuration.canvasElement2DContext.fillRect(0, 0, w, h);
    this.configuration.canvasElement2DContext.restore();
  }

  clear(color: string) {
    this.fillRect(
      0,
      0,
      this.configuration!.canvasWidth!,
      this.configuration!.canvasHeight!,
      color
    );
  }

  blit(x: number, y: number, image: CEImage) {
    this.configuration.canvasElement2DContext.drawImage(
      image.imageObject,
      x,
      y
    );
  }

  print(x: number, y: number, text: string, color: string) {
    this.configuration.canvasElement2DContext.fillStyle = color;
    this.configuration.canvasElement2DContext.fillText(text, x, y);
  }

  blitAndRotate(x: number, y: number, image: CEImage, angle: number) {
    this.configuration.canvasElement2DContext.save();
    this.configuration.canvasElement2DContext.translate(
      x + image.imageObject.width * 0.5,
      y + image.imageObject.height * 0.5
    );
    this.configuration.canvasElement2DContext.rotate(angle * 0.01745);
    this.configuration.canvasElement2DContext.translate(
      -image.imageObject.width * 0.5,
      -image.imageObject.height * 0.5
    );
    this.configuration.canvasElement2DContext.drawImage(
      image.imageObject,
      0,
      0
    );
    this.configuration.canvasElement2DContext.restore();
  }

  getPixel(x: number, y: number) {
    return this.configuration.canvasElement2DContext.getImageData(x, y, 1, 1)
      .data;
  }

  line(x: number, y: number, tx: number, ty: number, color: string) {
    this.configuration.canvasElement2DContext.fillStyle = color;
    this.configuration.canvasElement2DContext.beginPath();
    this.configuration.canvasElement2DContext.moveTo(x, y);
    this.configuration.canvasElement2DContext.lineTo(tx, ty);
    this.configuration.canvasElement2DContext.stroke();
  }

  drawTile(
    x: number,
    y: number,
    width: number,
    height: number,
    tileSet: CatyenImage,
    numberOfTile: number,
    tileWidth: number,
    tileHeight: number
  ) {
    const tilesHorizontal = Math.round(tileSet.imageObject.width / tileWidth);
    const tilesVertically = Math.round(tileSet.imageObject.height / tileHeight);
    const numberOfTiles = Math.round(tilesHorizontal * tilesVertically);

    let calculatedNumberOfTile = numberOfTile;

    if (numberOfTile > numberOfTiles)
      calculatedNumberOfTile = numberOfTile % numberOfTiles;

    const posX = calculatedNumberOfTile % tilesHorizontal;

    const posY = Math.round(calculatedNumberOfTile / tilesHorizontal);

    this.configuration.canvasElement2DContext.drawImage(
      tileSet.imageObject,
      Math.floor(posX * tileWidth),
      Math.floor(posY * tileHeight),
      tileWidth,
      tileHeight,
      x,
      y,
      width,
      height
    );
  }

  setFont(font: string, fontSize: number) {
    this.configuration.canvasElement2DContext.font = `${fontSize}px ${font}`;
  }

  printMultiLineText(
    x: number,
    y: number,
    text: string,
    charsPerLine: number,
    fontSize: number,
    font: string,
    color: string
  ) {
    let tempText = "";

    let charsToCount = 0;

    for (let n = 0; n < text.length; n++) {
      tempText += text[n];

      if (n % charsPerLine === 0 && n > 0) {
        charsToCount++;
      }

      if (charsToCount > 0) {
        if (text[n].trim() === "") {
          charsToCount = 0;
          tempText += "\n";
        } else if (charsToCount > 12) {
          charsToCount = 0;
          tempText += "\n";
        }
      }
    }

    let index = 0;

    this.configuration.canvasElement2DContext.font = `${fontSize}px ${font}`;

    for (const line of tempText.split("\n").map((l) => l.trim())) {
      this.print(x, y + index * fontSize * 1.3, line, color);
      index++;
    }
  }
}

export default DrawingsFeature;
