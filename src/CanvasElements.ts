import CEFrontEndConfiguration from './CEFrontEndConfiguration';
import CEControlsFeature from './Features/CEControlsFeature';

class CE 
{
    private configuration : CEFrontEndConfiguration;
    private controls : CEControlsFeature;

    constructor(canvasElementQuerySelector : string)
    {
        const canvasElement : Element = document.querySelector(canvasElementQuerySelector)!;

        this.configuration = new CEFrontEndConfiguration();
        this.configuration.htmlCanvasElement = canvasElement as HTMLCanvasElement;
        this.configuration.canvasWidth = canvasElement.clientWidth;
        this.configuration.canvasHeight = canvasElement.clientHeight;
        this.configuration.CanvasElement2DContext = (canvasElement as HTMLCanvasElement).getContext("2d")!;

    }

    initialize()
    {

    }
}

export default CE;