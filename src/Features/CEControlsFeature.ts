import CEFeatureBase from './CEFeatureBase';
import CEConfiguration from '../CEConfiguration';

export enum KeyboardKeys {
	LEFT = 39,
	RIGHT = 37,
	UP = 38,
	DOWN = 40,
	ENTER = 13,
	SPACE = 32,
	ESCAPE = 27,
	SHIFT = 16,
};

class CEControlsFeature extends CEFeatureBase
{
    public currentKeys : Set<string> = new Set();

    constructor(configuration : CEConfiguration)
    {
        super(configuration);
        this.setEvents(configuration.window!);
    }

    initialize()
    {
        this.initialized = true;
    }

    setEvents(window: Window)
    {
        window.addEventListener("keydown", this.keyDown.bind(this), false);
        window.addEventListener("keyup", this.keyUp.bind(this), false);
    }

    keyDown(event : KeyboardEvent)
    {
        this.currentKeys.add(event.code);
    }

    keyUp(event : KeyboardEvent)
    {
        this.currentKeys.delete(event.code);
    }

    read()
    {
        return this.currentKeys;
    }

    isPressed(key : KeyboardKeys)
    {
        return this.currentKeys.has(key.toString());
    }

}

export default CEControlsFeature;