module.exports = {
  'hello': function (browser) {
    browser
      .url('http://localhost:8080/hello/')
      .waitForElementVisible('#app', 5000)
      .assert.count('.hello', 2)
      .assert.containsText('.hello:nth-child(1)>h1', 'Welcome to Your Vue.js Plugin')
      .assert.containsText('.hello:nth-child(2)>h1', `Welcome to xsdlr's Vue.js Plugin`)
      .end()
  }
}
