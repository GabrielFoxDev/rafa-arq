import HTMLHandler from './src/ChainOfResponsibility/HTMLHandler.js'

class CityHandler extends HTMLHandler {
    handle(data) {
        data.forEach((city)=>{
            console.log('          <li>' + city + '</li>');
        });
    }
}

export default CityHandler;