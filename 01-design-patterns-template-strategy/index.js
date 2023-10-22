/*import LoaderXML from './src/LoaderXML.js';
import CompositeLoader from './src/CompositeLoader.js';

const filePath = process.argv[2];
const compositeLoader = new CompositeLoader();
compositeLoader.addLoader(new LoaderXML());
let parsedData = {};
compositeLoader.load(filePath)
  .then(jsonData => {
   parsedData = jsonData;
   console.log(JSON.stringify(jsonData, null, 2));
  })
  .catch(error => {
    console.error('Erro ao carregar e processar o arquivo:', error);
  });
*/

import FormaterHTML from './src/FormaterHTML.js';
import FormaterTXT from './src/FormaterTXT.js';
import CitiesReporter from './src/CitiesReporter.js';

const [cmd, script, inputType] = process.argv,
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






