import LoaderXML from './src/Composite/LoaderXML.js';
import LoaderHTML from './src/Composite/LoaderHTML.js';
import LoaderYAML from './src/LoaderYAML.js';
import LoaderCSV from './src/LoaderCSV.js';
import CompositeLoader from './src/CompositeLoader.js';

const filePath = process.argv[2];
const compositeLoader = new CompositeLoader();
compositeLoader.addLoader(new LoaderXML());
compositeLoader.addLoader(new LoaderHTML());
compositeLoader.addLoader(new LoaderYAML());
compositeLoader.addLoader(new LoaderCSV());


compositeLoader.load(filePath)
  .then(jsonData => {
   console.log(JSON.stringify(jsonData, null, 2));
  })
  .catch(error => {
    console.error('Erro ao carregar e processar o arquivo:', error);
  });


/*
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


*/



