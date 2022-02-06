import FeatureBase from './FeatureBase';
import Configuration from '../Configuration';

export enum KeyboardKeys {
    LEFT = "ArrowLeft",
    RIGHT ="ArrowRight",
    UP = "ArrowUp",
    DOWN = "ArrowDown",
    ENTER = "Enter",
    SPACE = "Space",
    ESCAPE = "Escape",
    SHIFT = "ShiftLeft",
};

interface MouseState {
    clientX: number,
    clientY: number,
    mouseDown: boolean
}

class ControlsFeature extends FeatureBase {
    public currentKeys: Set<string> = new Set();
    public mouseState: MouseState = { clientX: 0, clientY: 0, mouseDown: false };

    constructor(configuration: Configuration) {
        super(configuration);
        this.setEvents(configuration.window!);
    }

    initialize() {
        this.initialized = true;
    }

    setEvents(window: Window) {
        window.addEventListener("keydown", this.keyDown.bind(this), false);
        window.addEventListener("keyup", this.keyUp.bind(this), false);
        window.addEventListener("mousemove", this.mousemove.bind(this), false);
        window.addEventListener("mousedown", this.mousedown.bind(this), false);
        window.addEventListener("mouseup", this.mouseup.bind(this), false);
    }

    keyDown(event: KeyboardEvent) {
        this.currentKeys.add(event.code);
    }

    keyUp(event: KeyboardEvent) {
        this.currentKeys.delete(event.code);
    }

    mousemove(event: MouseEvent) {
        this.mouseState.clientX = event.clientX;
        this.mouseState.clientY = event.clientY;
    }

    mousedown(event: MouseEvent) {
        this.mouseState.mouseDown = true;
    }

    mouseup(event: MouseEvent) {
        this.mouseState.mouseDown = false;
    }

    read() {
        return this.currentKeys;
    }

    isPressed(key: KeyboardKeys) {
        return this.currentKeys.has(key.toString());
    }

}

export default ControlsFeature;