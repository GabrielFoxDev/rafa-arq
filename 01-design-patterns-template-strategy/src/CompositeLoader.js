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
  
    // Implemente a lógica para mapear a extensão para o tipo de arquivo correspondente
    // Por exemplo, se a extensão for 'xml', você pode retornar 'xml'
    // Se a extensão for 'json', você pode retornar 'json'
    // Certifique-se de retornar o valor correto para o tipo de arquivo
  
    return extension;
  }
}