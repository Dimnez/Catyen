import Configuration from './Configuration';
import ControlsFeature from './Features/ControlsFeature';
import DrawingsFeature from './Features/DrawingsFeature';
import LoopFeature from './Features/LoopFeature';

class Catyen 
{
    public configuration : Configuration;
    public controls : ControlsFeature;
    public draw : DrawingsFeature;
    public loop : LoopFeature;

    constructor(canvasElementQuerySelector : string,window : Window)
    {
        const canvasElement : Element = document.querySelector(canvasElementQuerySelector)!;

        //Basic configuration
        this.configuration = new Configuration();
        this.configuration.htmlCanvasElement = canvasElement as HTMLCanvasElement;
        this.configuration.canvasWidth = canvasElement.clientWidth;
        this.configuration.canvasHeight = canvasElement.clientHeight;
        this.configuration.canvasElement2DContext = (canvasElement as HTMLCanvasElement).getContext("2d")!;
        this.configuration.window = window;

        this.configuration.canvasElement2DContext.imageSmoothingEnabled = false;

        //Set feature attributes
        this.controls = new ControlsFeature(this.configuration);
        this.draw = new DrawingsFeature(this.configuration); 
        this.loop = new LoopFeature(this.configuration);

        
        this.initialize();
    }

    initialize()
    {
        //Initialize all features
        this.controls.initialize();

    }
}

export default Catyen;