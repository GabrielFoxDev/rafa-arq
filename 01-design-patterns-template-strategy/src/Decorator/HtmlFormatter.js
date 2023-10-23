import IFormatter from './IFormatter.js';

export default class HtmlFormatter extends IFormatter {
  format (cities) {
    const html = "";
    cities.forEach(city => html += `<li>${city.Nome}</li>\n`)
    return html;
  }
}