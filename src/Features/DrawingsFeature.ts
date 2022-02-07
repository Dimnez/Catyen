import CEFeatureBase from './FeatureBase';
import CEImage from '../Models/CatyenImage';

class DrawingsFeature extends CEFeatureBase {
    initialize() {
        this.initialized = true;
    }

    setEvents(window: Window) {
    }

    fillRect(x: number, y: number, w: number, h: number, color: string) {
        this.configuration.canvasElement2DContext.fillStyle = color;
        this.configuration.canvasElement2DContext.fillRect(x, y, w, h);
    }

    clear(color: string) {
        this.fillRect(0, 0, this.configuration!.canvasWidth!, this.configuration!.canvasHeight!, color);
    }

    blit(x: number, y: number, image: CEImage) {
        this.configuration.canvasElement2DContext.drawImage(image.imageObject, x, y);
    }

    print(x: number, y: number, text: string, color: string) {
        this.configuration.canvasElement2DContext.fillStyle = color;
        this.configuration.canvasElement2DContext.fillText(text, x, y);
    }

    blitAndRotate(x: number, y: number, image: CEImage, angle : number) {
        this.configuration.canvasElement2DContext.save();
        this.configuration.canvasElement2DContext.translate(image.imageObject.width * 0.5, image.imageObject.height * 0.5);
        this.configuration.canvasElement2DContext.rotate(angle* 0.01745);
        this.configuration.canvasElement2DContext.translate(-image.imageObject.width * 0.5, -image.imageObject.height * 0.5);
        this.configuration.canvasElement2DContext.drawImage(image.imageObject, x, y);
        this.configuration.canvasElement2DContext.restore();
    }

    line(x: number, y: number, tx: number, ty: number, color: string) {
        this.configuration.canvasElement2DContext.fillStyle = color;
        this.configuration.canvasElement2DContext.beginPath();
        this.configuration.canvasElement2DContext.moveTo(x, y);
        this.configuration.canvasElement2DContext.lineTo(tx, ty);
        this.configuration.canvasElement2DContext.stroke();
    }

}

export default DrawingsFeature;