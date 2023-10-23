import Loader from "./Loader.js";

export default class CompositeLoader extends Loader {
  constructor() {
    super();
    this.loaders = [];
  }

  addLoader(loader) {
    this.loaders.push(loader);
  }

  async load(filePath) {
    const fileType = this.getFileType(filePath);
    console.log(fileType);
    const loader = this.loaders.find(loader => loader.supportsFile(fileType));

    if (loader) {
      const jsonData = await loader.load(filePath);
      return jsonData;
    } else {
      throw new Error('Nenhum loader compatível encontrado.');
    }
  }

  supportsFile(fileType) {
    return this.loaders.some(loader => loader.supportsFile(fileType));
  }

  getFileType(filePath) {
    const extension = filePath.split('.').pop().toLowerCase();

    const loader = this.loaders.find(loader => loader.supportsFile(this.fileType));
  
    if (loader) {
      return this.fileType;
    }
  
    return extension;
  }
}