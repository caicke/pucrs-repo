const express = require('express');
const soap = require('soap');
const bodyParser = require('body-parser');

var xml = require('fs').readFileSync('wsexmpl.wsdl', 'utf-8');

var myservice = {
    ws: {
        calc: {
            somar: function (args) {
                var n = 1 * args.a + 1 * args.b;
                return { sumres: n };
            },

            multiplicar: function (args) {
                var n = args.a * args.b;
                return { mulres: n };
            },

            parImpar: (arg) => {
                var res = (1 * arg.num % 2) == 0 ? "par" : "ímpar";
                return { output: res };
            }
        }
    }
};

const app = express();

app.use(bodyParser.raw({ type: function () { return true; }, limit: '5mb' }));

app.listen(8001, () => {
    soap.listen(app, '/wsexmpl', myservice, xml, () => {
        console.log('server initialized at port 8001');
    })
})