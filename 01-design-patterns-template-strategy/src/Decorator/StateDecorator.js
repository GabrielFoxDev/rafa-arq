import FormatterDecorator from './FormatterDecorator.js';
export default class StateDecorator extends FormatterDecorator {
  constructor(formatter) {
    this._formatter = formatter;
  }

  format(cities) {
    const html = this._formatter.format(cities);
    const htmlLines = html.split(/[\r\n]+/);
    const CLOSING_TAG_LEN = "</li>".length;

    htmlLinesWithState = htmlLines.map( (line, idx) => {
      return line.slice(0, line.length - CLOSING_TAG_LEN) + `- ${cities[idx].Estado}` + line.slice(CLOSING_TAG_LEN)
    })

    const htmlWithState = "";
    htmlLinesWithState.forEach(line => htmlWithState += `${line}\n`)

    return htmlWithState;
  }
}