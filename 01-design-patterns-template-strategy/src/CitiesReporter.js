import fs from 'node:fs';

export default class CitiesReporter {
  constructor ({ formaterStrategy, loaderStrategy }) {
    this._formaterStrategy = formaterStrategy;
    this._loaderStrategy = loaderStrategy;
  }

  _read (filename) {
    this._cities_json = fs.readFileSync(filename);
  }

  _parseJSON () {
    this._cities = JSON.parse(this._cities_json);
  }

  report (filename) {
    this._read(filename);
    this._parseJSON();
    return this._formaterStrategy.output(this._cities);
  }
}





