import LoaderXML from './src/Composite/LoaderXML.js';
import LoaderHTML from './src/Composite/LoaderHTML.js';
import LoaderYAML from './src/LoaderYAML.js';
import LoaderCSV from './src/LoaderCSV.js';
import CompositeLoader from './src/CompositeLoader.js';
import CityHandler from './src/Chain Of Responsibility/CityHandler.JS';
import StateHandler from './src/Chain Of Responsibility/StateHandler.JS';

const filePath = process.argv[2];

// objetos composite
const compositeLoader = new CompositeLoader();
compositeLoader.addLoader(new LoaderXML());
compositeLoader.addLoader(new LoaderHTML());
compositeLoader.addLoader(new LoaderYAML());
compositeLoader.addLoader(new LoaderCSV());


//objetos chain of responsibility
const cityHandler = new CityHandler();
const stateHandler = new StateHandler(cityHandler);

compositeLoader.load(filePath)
  .then(jsonData => {
   console.log(JSON.stringify(jsonData, null, 2));
  })
  .catch(error => {
    console.error('Erro ao carregar e processar o arquivo:', error);
  });




stateHandler.handle(jsonData);





