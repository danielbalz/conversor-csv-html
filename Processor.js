class Processor {

    static Processor(data) {
        var linhas = data.split("\r\n");
        var rows = [];
        
        linhas.forEach(element => {
            var arr = element.split(",");
            rows.push(arr);
        });

        return rows;
    }
}

module.exports = Processor;