import CEConfiguration from "../CEConfiguration";

class CEFeatureBase
{
    public initialized : boolean=false;
    public configuration : CEConfiguration;
    
    constructor(configuration : CEConfiguration)
    {
        this.configuration = configuration;
    }

    initialize(window: Window)
    {
        this.setEvents(window);
    }

    setEvents(window: Window)
    {

    }
}

export default CEFeatureBase;