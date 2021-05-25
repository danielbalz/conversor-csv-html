var Reader = require("./Reader");
var Writer = require("./Writer");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");

var leitor = new Reader();
var escritor = new Writer();

async function main() {
    var dados = await leitor.Read("./planilha.csv");

    var dadosProcessados = Processor.Processor(dados);

    var usuarios = new Table(dadosProcessados);    

    var html = await HtmlParser.Parse(usuarios);

    escritor.writer(Date.now() + '.html', html);
}

main();