import FormatterDecorator from './FormatterDecorator.js';
export default class StateDecorator extends FormatterDecorator {
  constructor(formatter) {
    super();
    this._formatter = formatter;
  }

  format(cities) {
    const html = this._formatter.format(cities);
    const htmlLines = html.split(/[\r\n]+/);
    htmlLines.pop();
    const CLOSING_TAG_LEN = "</li>".length;

    const htmlLinesWithState = htmlLines.map( (line, idx) => {
      return line.slice(0, line.length - CLOSING_TAG_LEN) + ` - ${cities[idx].Estado}` + line.slice(line.length - CLOSING_TAG_LEN);
    })

    let htmlWithState = "";
    htmlLinesWithState.forEach(line => htmlWithState += `${line}\n`)

    return htmlWithState;
  }
}
