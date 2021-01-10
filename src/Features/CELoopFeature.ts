import CEFeatureBase from './CEFeatureBase';

class CELoopFeature extends CEFeatureBase
{

    private requestFrameFunction?: Function;

    setEvents(window: Window)
    {
        if(this.requestFrameFunction && this.configuration.window)
        window.requestAnimationFrame((ts) => this.doRender(this.requestFrameFunction!));
    }

    requestFrame(requestFrameFunction : Function)
    {
        this.requestFrameFunction = requestFrameFunction;
        this.setEvents(this.configuration.window!);
    }

    doRender(requestFrameFunction : Function)
    {
        if(this.requestFrameFunction)
        this.requestFrameFunction();
    }
}

export default CELoopFeature;