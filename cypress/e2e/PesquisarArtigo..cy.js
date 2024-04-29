import PesquisarartigoPage from "../support/Page/PesquisarartigoPage"

describe('Pesquisa de Artigos no Blog da Agibank', function() {
    it('T01: Realizar a pesquisa de um artigo com sucesso', function(){
      //Acesso a página inicial do blog Agi
      PesquisarartigoPage.acessarSite();
      //Clico no botão de pesquisa
      PesquisarartigoPage.clicarBotaoPesquisar();
      // Preencho a palavra "Cartões" na barra de pesquisa
      PesquisarartigoPage.preencherCampoPesquisar()
      // Clicar no campo de Pesquisar
      PesquisarartigoPage.clicarPesquisar();
      //Verificado o resultado do título Cartões
      PesquisarartigoPage.ResultadoPesquisaSucesso();
    })

    it('T02: Realizar a pesquisa de um artigo sem sucesso', function(){
        PesquisarartigoPage.acessarSite();
        //Clico no botão de pesquisa
        PesquisarartigoPage.clicarBotaoPesquisar();
        // Preencho a palavra "Page Objects" na barra de pesquisa
        PesquisarartigoPage.preencherCampoPesquisarInválido()
        // Clicar no campo de Pesquisar
       PesquisarartigoPage.clicarPesquisar();
        //Verificado o resultado do título Cartões
        PesquisarartigoPage.ResultadoSemsucesso();
    })

    it('T03: Realizar a pesquisa de um artigo sem sucesso e realizar a pesquisa de um artigo com sucesso', function(){
        //Acesso a página inicial do blog Agi
        PesquisarartigoPage.acessarSite();
        //Clico no botão de pesquisa
        PesquisarartigoPage.clicarBotaoPesquisar();
        // Preencho a palavra "Page Objects" na barra de pesquisa
        PesquisarartigoPage.preencherCampoPesquisarInválido()
        // Clicar no campo de Pesquisar
        PesquisarartigoPage.clicarPesquisar();
        //Verificado o resultado do título Cartões
        PesquisarartigoPage.ResultadoSemsucesso();
        // Preencho a palavra "Cartões" no campo de Search
        PesquisarartigoPage.CampoSearch()
        // Clico no botão de Pesquisar do campo Search
        PesquisarartigoPage.BotaoPesquisarSearch()
    })

    it('T04: Realizar a pesquisa de um artigo com sucesso e realizar a inclusao de endereço de e-mail com sucesso', function(){
        //Acesso a página inicial do blog Agi
        PesquisarartigoPage.acessarSite();
        //Clico no botão de pesquisa
        PesquisarartigoPage.clicarBotaoPesquisar();
        // Preencho a palavra "Cartões" na barra de pesquisa
        PesquisarartigoPage.preencherCampoPesquisar()
        // Clicar no campo de Pesquisar
        PesquisarartigoPage.clicarPesquisar();
        //Verificado o resultado do título Cartões
        PesquisarartigoPage.ResultadoPesquisaSucesso();
        //Preencho um e-mail fictício gerado pelo Faker-js na barra de endereço de e-mail
        PesquisarartigoPage.CampoEndereçodeemail();
        // Clicar no campo de Assinar
        PesquisarartigoPage.BotaoAssinar();
        //Verificando a mensagem de Sucesso! Enviamos um e-mail para confirmar a sua assinatura.
        PesquisarartigoPage.MsgSucessoEmail();        
    })
})