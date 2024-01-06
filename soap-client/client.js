const soap = require('soap');

var url = 'http://localhost:8001/wsexmpl?wsdl';

const args = { a: "1", b: "3" };

const parImpar = { num: 18 };

soap.createClient(url, (err, client) => {

    // Describe the services
    // const description = client.describe().ws.calc;

    // Uncomment below line if you want to see all services available
    // console.log(description);

    client.somar(args, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log("Resultado da soma:", res.sumres);
    });

    client.multiplicar(args, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log("Resultado da multiplicação:", res.mulres);
    });

    client.parImpar(parImpar, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log("Retorno:", res.output);
    });
})