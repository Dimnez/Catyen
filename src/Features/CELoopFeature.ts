import CEFeatureBase from './CEFeatureBase';

class CELoopFeature extends CEFeatureBase
{

    private requestFrameFunction?: Function;

    setEvents(window: Window)
    {
        window.requestAnimationFrame(() => this.doRender());
    }

    requestFrame(requestFrameFunction : Function)
    {
        this.requestFrameFunction = requestFrameFunction;
        this.setEvents(this.configuration.window!);
    }

    doRender()
    {
        if(this.requestFrameFunction)
        {
            this.requestFrameFunction();
        }
        window.requestAnimationFrame(() => this.doRender());
    }
}

export default CELoopFeature;