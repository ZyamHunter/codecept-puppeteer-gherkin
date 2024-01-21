const home = require("../pages/home");
const result_list = require("../pages/result_list");

const { I } = inject();

Given('i has in the google page', () => {
  home.goToGoogle()
  home.verifyHome();
});

When('confirm the search into input', () => {
  home.trySearch();
});

Then('see the results for my search', () => {
    result_list.verifyResults
});
