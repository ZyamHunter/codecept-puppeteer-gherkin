const { I } = inject();

module.exports = {
  element_result: 'h3',
  search_input: '//*[@name="q"]',

  verifyResults: function() {
    I.waitForVisible({css: this.element_result}, 30)
  },

  clickExpectedElement: function() {
    I.waitForVisible({css: this.element_result}, 30)
    I.click({css: this.element_result})
  },
}
