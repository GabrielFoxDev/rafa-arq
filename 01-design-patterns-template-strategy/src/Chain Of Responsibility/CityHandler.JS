import HTMLHandler from './src/Chain Of Responsibility/HTMLHandler.js'

class CityHandler extends HTMLHandler {
    handle(data) {
        data.forEach((city)=>{
            console.log('          <li>' + city + '</li>');
        });
    }
}

export default CityHandler;