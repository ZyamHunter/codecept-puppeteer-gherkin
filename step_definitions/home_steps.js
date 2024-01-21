const home = require("../pages/home");

const { I } = inject();

Given('I launch the browser', () => {
  home.goToGoogle()
});

When('access the google site', () => {
  home.verifyHome();
});

Then('see the web page', () => {
  home.seeWebPage()
});
