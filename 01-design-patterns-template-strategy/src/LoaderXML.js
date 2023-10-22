import fs from 'node:fs';
import Loader from './Loader.js';

  export default class LoaderXML extends Loader {
    load(filename) {
      return new Promise((resolve, reject) => {
        const xmlData = fs.readFileSync(filename, 'utf-8');
        const rows = xmlData.split('<row>');
        rows.shift();
  
        const jsonData = {
          root: {
            row: rows.map((row) => {
              const idMatch = /<ID>(.*?)<\/ID>/.exec(row);
              const nomeMatch = /<Nome>(.*?)<\/Nome>/.exec(row);
              const estadoMatch = /<Estado>(.*?)<\/Estado>/.exec(row);
  
              if (idMatch && nomeMatch && estadoMatch) {
                return {
                  ID: idMatch[1],
                  Nome: nomeMatch[1],
                  Estado: estadoMatch[1],
                };
              }
  
              return null;
            }),
          },
        };
  
        jsonData.root.row = jsonData.root.row.filter((item) => item !== null);
  
        resolve(jsonData);
      });
    }
  }