import CEConfiguration from './CEConfiguration';
import CEControlsFeature from './Features/CEControlsFeature';
import CEDrawingsFeature from './Features/CEDrawingsFeature';
import CELoopFeature from './Features/CELoopFeature';

class CE 
{
    private configuration : CEConfiguration;
    private controls : CEControlsFeature;
    private draw : CEDrawingsFeature;
    private loop : CELoopFeature;

    constructor(canvasElementQuerySelector : string,window : Window)
    {
        const canvasElement : Element = document.querySelector(canvasElementQuerySelector)!;

        //Basic configuration
        this.configuration = new CEConfiguration();
        this.configuration.htmlCanvasElement = canvasElement as HTMLCanvasElement;
        this.configuration.canvasWidth = canvasElement.clientWidth;
        this.configuration.canvasHeight = canvasElement.clientHeight;
        this.configuration.canvasElement2DContext = (canvasElement as HTMLCanvasElement).getContext("2d")!;
        this.configuration.window = window;

        //Set feature attributes
        this.controls = new CEControlsFeature(this.configuration);
        this.draw = new CEDrawingsFeature(this.configuration); 
        this.loop = new CELoopFeature(this.configuration);

        this.initialize();
    }

    initialize()
    {
        //Initialize all features
        this.controls.initialize();

    }
}

export default CE;