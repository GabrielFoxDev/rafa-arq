import LoaderXML from './src/LoaderXML.js'; // Substitua pelo caminho correto do seu arquivo LoaderXML.js

// Obtenha o caminho do arquivo XML a partir dos argumentos da linha de comando
const xmlFilePath = process.argv[2]; // O caminho será o primeiro argumento após o nome do arquivo


// Crie uma instância do XMLLoader
const xmlLoader = new LoaderXML();

// Chame a função load para carregar e analisar o XML
xmlLoader.load(xmlFilePath)
  .then(jsonData => {
    // Verifique o resultado
    console.log(JSON.stringify(jsonData, null, 2)); // Isso imprimirá o JSON formatado no console
  })
  .catch(error => {
    console.error('Erro ao carregar e analisar o XML:', error);
  });
/*
import FormaterHTML from './src/FormaterHTML.js';
import FormaterTXT from './src/FormaterTXT.js';
import CitiesReporter from './src/CitiesReporter.js';

const [cmd, script, inputType, inputPath] = process.argv,
      filename = './data/cidades-2.json';

const formaterStrategies = {
  'html': new FormaterHTML(),
  'txt': new FormaterTXT()
};

let reporter = new CitiesReporter({
      formaterStrategy: formaterStrategies[inputType]
    }),
    output = reporter.report(filename);

console.log(output);
*/





