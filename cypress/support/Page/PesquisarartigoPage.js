import PesquisarartigoElements from './PesquisarartigoElements'
import { faker } from '@faker-js/faker';
const url = Cypress.config("baseUrl")

class PesquisarartigoPage {

    // Acessa o site Blog Agibank
    acessarSite() {
        cy.visit(url)
    }
    // Clica no botão Pesquisar
    clicarBotaoPesquisar() {
        cy.get(PesquisarartigoElements.BotaoPesquisar()).click()
    }
    // Preencher o campo de pesquisa com Cartões
    preencherCampoPesquisar() {
        cy.get(PesquisarartigoElements.CampoPesquisar()).type('Cartões')
    }
    preencherCampoPesquisarInválido() {
        cy.get(PesquisarartigoElements.CampoPesquisar()).type('Page objects')
    }

    clicarPesquisar() {
        cy.get(PesquisarartigoElements.BotaoPesquisar()).click()
    }

    ResultadoPesquisaSucesso() {
        cy.get(PesquisarartigoElements.ResultadoPesquisaSucesso()).should('contain','Cartões');
    }
    
    ResultadoSemsucesso() {
        cy.get(PesquisarartigoElements.ResultadoSemsucesso()).should('contain', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')
    }

    CampoSearch() {
        cy.get(PesquisarartigoElements.CampoSearch()).type('Cartões')
    }

    BotaoPesquisarSearch() {
        cy.get(PesquisarartigoElements.BotaoPesquisarSearch()).click()
    }

    CampoEndereçodeemail() {
        let fakeEmail = faker.internet.email();
        cy.get(PesquisarartigoElements.CampoEndereçodeemail()).type(fakeEmail)
    }

    BotaoAssinar() {
        cy.get(PesquisarartigoElements.BotaoAssinar()).click()
    }
    MsgSucessoEmail() {
        cy.get(PesquisarartigoElements.MsgSucessoEmail()).should('contain', 'Sucesso! Enviamos um e-mail para confirmar a sua assinatura. Encontre o e-mail agora e clique em')
    }    
}
module.exports = new PesquisarartigoPage;