import IFormatter from './IFormatter.js';

export default class HtmlFormatter extends IFormatter {
  format (cities) {
    let html = "";
    cities.forEach(city => html += `    <li>${city.Nome}</li>\n`)
    return html;
  }
}
