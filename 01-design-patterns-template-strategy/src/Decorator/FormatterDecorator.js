import IFormatter from './IFormatter.js';

export default class FormatterDecorator extends IFormatter {
  constructor(formatter) {
    super();
    this._formatter = formatter;
  }

  format(cities) {
    return this._formatter.format(cities)
  }
}
