import CE from "../CanvasElements"

class CEFeatureBase
{
    public initialized : boolean=false;

    constructor()
    {

    }

    intialize(window: Window)
    {
        this.setEvents(window);
    }

    setEvents(window: Window)
    {

    }
}

export default CEFeatureBase;