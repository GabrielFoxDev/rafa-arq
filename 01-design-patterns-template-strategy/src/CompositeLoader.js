import FileLoader from "./FileLoader.js";

export default class CompositeLoader extends FileLoader {
    constructor() {
      super();
    }
  
    addLoader(loader) {
      this.loaders.push(loader);
    }
  
    load(filename) {

    }
  }