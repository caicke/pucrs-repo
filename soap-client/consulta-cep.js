const soap = require('soap');

var url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

const args = { cep: "29101420" };

soap.createClient(url, (err, client) => {

    // Describe the services
    const description = client.describe().AtendeClienteService.AtendeClientePort;

    // Uncomment below line if you want to see all services available
    // console.log(description);

    client.consultaCEP(args, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(res.return);
    })
})