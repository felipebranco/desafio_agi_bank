const { defineConfig } = require("cypress");

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";
module.exports = defineConfig({
    e2e: {
       baseUrl: 'https://blogdoagi.com.br/',
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
        }
    },  
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
});

