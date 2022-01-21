import CEFeatureBase from './FeatureBase';
import CEImage from '../Models/CatyenImage';

class DrawingsFeature extends CEFeatureBase
{
    initialize()
    {
        this.initialized = true;
    }

    setEvents(window: Window)
    {
    }

    fillRect(x : number, y : number, w : number, h : number, color : string) {
        this.configuration.canvasElement2DContext.fillStyle = color;
        this.configuration.canvasElement2DContext.fillRect(x, y, w, h);
    }
    
    clear(color : string) {
        this.fillRect(0, 0, this.configuration!.canvasWidth!, this.configuration!.canvasHeight!, color);
    }
    
    blit(x : number, y : number, image : CEImage) {
        this.configuration.canvasElement2DContext.drawImage(image.imageObject, x, y);
    }

    print(x : number, y : number, text : string, color : string) {
        this.configuration.canvasElement2DContext.fillStyle = color;
        this.configuration.canvasElement2DContext.fillText(text, x, y);
    }    
}

export default DrawingsFeature;