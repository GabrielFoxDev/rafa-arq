export default class FileLoader {
    constructor(filetype) {
      this.filetype = filetype;
    }
  
    load(filename) {
      throw new Error('Método não implementado.');
    }
  }