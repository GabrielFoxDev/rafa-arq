import fs from 'node:fs';
import xml2js from 'xml2js';
import FileLoader from './FileLoader.js';

export default class LoaderXML extends FileLoader {
  constructor() {
    super('xml');
  }

  load(filename) {
    return new Promise((resolve, reject) => {
      const xmlData = fs.readFileSync(filename, 'utf-8');

      // Use o xml2js para analisar o XML e converter em um objeto JavaScript (JSON).
      const parser = new xml2js.Parser();
      parser.parseString(xmlData, (error, result) => {
        if (error) {
          reject('Erro ao analisar XML: ' + error.message);
        }

        // O resultado contém o objeto JavaScript que representa o XML.
        // Neste exemplo, consideramos que o XML tem a estrutura que você forneceu.
        // Você pode ajustar o código conforme necessário para a estrutura real do seu XML.

        const jsonData = {
          root: {
            row: result.root.row.map((item) => {
              return {
                ID: item.ID[0],
                Nome: item.Nome[0],
                Estado: item.Estado[0],
              };
            }),
          },
        };

        // Resolve a promessa com o objeto JSON gerado a partir do XML.
        resolve(jsonData)
      });
    });
  }
}