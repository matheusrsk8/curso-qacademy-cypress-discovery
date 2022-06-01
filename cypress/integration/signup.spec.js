import signupPage from '../pages/SignupPage'
import factoryPage from '../factories/SignupFactory'

describe('Signup', function () {

    // FIXME - ESSE BEFORE EACH ESTÁ COMENTADO PORQUE OPTEI POR IMPLEMENTAR .factories/js AO INVES DE .fixtures/JSON
    // beforeEach(function(){
    //     cy.fixture('deliver').then(function(d){
    //         this.deliver = d;
    //     })
    // })

    it('User should be deliver person', function () {

        var deliver = factoryPage.deliver(); // FIXME - Trabalhando com massa através da factories/SignupFactory.js

        signupPage.go();
        // signupPage.fillForm(this.deliver.signup_happy_scenario); FIXME - IMPLEMENTACÃO POR .fixtures/json
        signupPage.fillForm(deliver); //IMPLEMETACAO POR factories/SignupFactory.js
        signupPage.submit();
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
        signupPage.modalContentShouldBe(expectedMessage);

    })

    it('Should fill incorrect document', function () {

        var deliver = factoryPage.deliver(); // FIXME - Trabalhando com massa através da factories/SignupFactory.js
        deliver.cpf = '123456789AA';

        signupPage.go();
        // signupPage.fillForm(this.deliver.signup_alt_scenario_cpf_inv); FIXME - IMPLEMENTACÃO POR .fixtures/json
        signupPage.fillForm(deliver); //IMPLEMETACAO POR factories/SignupFactory.js
        signupPage.submit();
        const expectedMessage = 'Oops! CPF inválido';
        signupPage.alertContentShouldBe(expectedMessage);

    })

    it('Should fill incorrect email', function () {

        var deliver = factoryPage.deliver(); // FIXME - Trabalhando com massa através da factories/SignupFactory.js
        deliver.email = 'email.incorreto.br';

        signupPage.go();
        // signupPage.fillForm(this.deliver.signup_alt_scenario_email_inv); FIXME - IMPLEMENTACÃO POR .fixtures/json
        signupPage.fillForm(deliver); //IMPLEMETACAO POR factories/SignupFactory.js
        signupPage.submit();
        const expectedMessage = 'Oops! Email com formato inválido.';
        signupPage.alertContentShouldBe(expectedMessage);

    })

    context('Required fields', function(){
        const messages = [
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número do endereço'},
            {field: 'delivery_method', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'}
        ]

        before(function(){
            signupPage.go();
            signupPage.submit();
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signupPage.alertContentShouldBe(msg.output);
            })
        })
    })
})