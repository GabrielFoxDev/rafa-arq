import LoaderXML from './src/Composite/LoaderXML.js';
import LoaderHTML from './src/Composite/LoaderHTML.js';
import LoaderYAML from './src/Composite/LoaderYAML.js';
import LoaderCSV from './src/Composite/LoaderCSV.js';
import CompositeLoader from './src/Composite/CompositeLoader.js';
import CityHandler from './src/ChainOfResponsibility/CityHandler.js';
import StateHandler from './src/ChainOfResponsibility/StateHandler.js';
import HeaderHandler from './src/ChainOfResponsibility/HeaderHandler.js';

import HtmlFormatter from './src/Decorator/HtmlFormatter.js';
import StateDecorator from './src/Decorator/StateDecorator.js';
import TemplateDecorator from './src/Decorator/TemplateDecorator.js';


const filePath = process.argv[2];

// objetos composite
const compositeLoader = new CompositeLoader();
compositeLoader.addLoader(new LoaderXML());
compositeLoader.addLoader(new LoaderHTML());
compositeLoader.addLoader(new LoaderYAML());
compositeLoader.addLoader(new LoaderCSV());


//objetos chain of responsibility
// const cityHandler = new CityHandler();
// const stateHandler = new StateHandler(cityHandler);
// const headerHandler = new HeaderHandler(stateHandler);

compositeLoader.load(filePath)
  .then(jsonData => {
    // headerHandler.handle(jsonData);

    const decoratedFormatter = new TemplateDecorator(new StateDecorator(new HtmlFormatter()));
    console.log(decoratedFormatter.format(jsonData));
  })
  .catch(error => {
    console.error('Erro ao carregar e processar o arquivo:', error);
});









