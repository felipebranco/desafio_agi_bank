class PesquisarartigoElements {
    BotaoPesquisar = () => { return '.site-header-above-section-right > .ast-builder-layout-element' }
    CampoPesquisar = () => { return '#search-field' }
    ResultadoPesquisaSucesso = () => { return '.page-title > span'}
    ResultadoSemsucesso = () => { return '#main' }
    CampoSearch = () => { return '.widget > .search-form > label > #search-field' }
    BotaoPesquisarSearch = () => { return 'input.search-submit' }
    CampoEndereçodeemail = () => { return '#subscribe-field-blog_subscription-3' }
    BotaoAssinar = () => { return '#subscribe-submit > .wp-block-button__link' }
    MsgSucessoEmail = () => { return '.success > p' }  
}
module.exports = new PesquisarartigoElements();
