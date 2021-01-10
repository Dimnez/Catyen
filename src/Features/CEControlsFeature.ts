import CEFeatureBase from './CEFeatureBase';

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
    private currentKeys : Set<string> = new Set();

    initialize()
    {
        this.initialized = true;
    }

    setEvents(window: Window)
    {
        window.addEventListener("keydown", this.keyDown, false);
        window.addEventListener("keyup", this.keyUp, false);
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