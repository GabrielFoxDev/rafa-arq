import fs from 'node:fs';
import Loader from './Composite/Loader.js';

const fileType = 'yaml';

  export default class LoaderYAML extends Loader {
    constructor() {
      super(fileType);
    }
    
    load(filePath) {
        return new Promise((resolve, reject) => {
            const yamlData = fs.readFileSync(filePath, 'utf-8');
            const rows = yamlData.split('-');
            rows.shift();
      
            const jsonData = rows.map((row) => {
              const idMatch = /ID:(.*?)/.exec(row);
              const nomeMatch = /Nome:(.*?)/.exec(row);
              const estadoMatch = /Estado:(.*?)/.exec(row);
            
              if (idMatch && nomeMatch && estadoMatch) {
                return {
                  ID: idMatch[1],
                  Nome: nomeMatch[1],
                  Estado: estadoMatch[1],
                };
              }
            
              return null;
            }).filter((row) => row !== null);
      
            resolve(jsonData);
          });     
    }
  }