import FormatterDecorator from './FormatterDecorator.js';
export default class TemplateDecorator extends FormatterDecorator {
  constructor(formatter) {
    super();
    this._formatter = formatter;
  }

  format(cities) {
    const templateStart = `<!DOCTYPE HTML>
<html>
<head>
   <meta http-equiv="content-type" content="text/html; charset=utf-8" />
   <title>Relatório de Nomes de Cidades</title>
</head>
<body>
  <h1>Relatório de Nomes de Cidades</h1>
  <ul>\n`;
    const templateEnd = `  </ul>
</body>
</html>`;

    return templateStart + this._formatter.format(cities) + templateEnd;
  }
}
