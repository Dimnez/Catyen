import FeatureBase from "./FeatureBase";

class LoopFeature extends FeatureBase {
  private requestFrameFunction?: Function;

  setEvents(window: Window) {
    window.requestAnimationFrame(() => this.doRender());
  }

  requestFrame(requestFrameFunction: Function) {
    this.requestFrameFunction = requestFrameFunction;
    this.setEvents(this.configuration.window!);
  }

  doRender() {
    if (this.requestFrameFunction) {
      this.requestFrameFunction();
    }
    window.requestAnimationFrame(() => this.doRender());
  }

  tweenTo(variable: number, to: number, step: number) : number {
    const rest = to % step;
    const corrigatedTo = to - rest;
  
    if(variable >= corrigatedTo)
    variable = to;
  
    if (to > variable) {
      variable += step;
    } else if (to < variable) {
      variable -= step;
    }
  
    return variable;
  }
  
}

export default LoopFeature;
