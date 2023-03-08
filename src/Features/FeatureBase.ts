import Configuration from "../Configuration";

class FeatureBase {
  public initialized: boolean = false;
  public configuration: Configuration;

  constructor(configuration: Configuration) {
    this.configuration = configuration;
  }

  initialize(window: Window) {
    this.setEvents(window);
  }

  setEvents(window: Window) {}
}

export default FeatureBase;
