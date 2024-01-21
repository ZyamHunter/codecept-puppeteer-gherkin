const { I } = inject();

module.exports = {
  search_input: '//*[@name="q"]',
  base_url: 'https://www.google.com/',
  textToSee: 'Como funciona a Pesquisa',

  goToGoogle: function() {
    I.amOnPage(this.base_url)
    I.waitForVisible(this.search_input, 30);
  },

  verifyHome: function() {
    I.waitUrlEquals(this.base_url, 10)
  },

  seeWebPage: function() {
    I.see(this.textToSee)
  },

  trySearch: function() {
    I.waitForVisible(this.search_input, 30);
    I.fillField(this.search_input, 'selenium');
    I.pressKey('Enter');
  },
}
