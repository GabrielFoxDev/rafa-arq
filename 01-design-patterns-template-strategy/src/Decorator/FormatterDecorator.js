import IFormatter from './IFormater.js';

export default class FormatterDecorator extends IFormatter {
  constructor(formatter) {
    this._formatter = formatter;
  }

  format(cities) {
    return this._formatter.format(cities)
  }
}