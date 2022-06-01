var faker = require('faker');
var cpf = require('gerador-validador-cpf');

export default {

    deliver: function() {

        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11988888888',
            address: {
                postalcode: '06340-390',
                street: 'Rua Francisco Abruzzesse',
                number: '1003',
                details: 'Ap 007',
                city_state: 'Carapicuíba/SP',
                district: 'Parque Santa Teresa'
            },
            delivery_method: 'Moto',
            cnh: 'cnh.jpg'
        }

        return data;
    }
}