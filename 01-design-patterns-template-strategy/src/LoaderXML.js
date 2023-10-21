import fs from 'node:fs';
import FileLoader from './FileLoader.js';

export default class LoaderXML extends FileLoader {
  constructor() {
    super('xml');
  }

  load(filename) {
    return new Promise((resolve, reject) => {
      const xmlData = fs.readFileSync(filename, 'utf-8');

      // Analise manualmente o XML e crie o JSON correspondente
      const rows = xmlData.split('<row>');

      // Remove a primeira parte que não é necessária
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

      // Filtrar os itens nulos que não corresponderam ao padrão
      jsonData.root.row = jsonData.root.row.filter((item) => item !== null);

      // Resolve a promessa com o objeto JSON gerado manualmente a partir do XML.
      resolve(jsonData);
    });
  }
}