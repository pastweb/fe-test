require('@babel/polyfill')
const chai = require('chai')
const MockBrowser = require('mock-browser').mocks.MockBrowser
chai.use(require('chai-as-promised'))
chai.use(require('sinon-chai'))

global.expect = chai.expect

const globalSetup = () => {
  const browser = new MockBrowser()
  global.window = browser.getWindow()
  global.window.document = global.document = browser.getDocument()
  global.window.navigator = global.navigator = browser.getNavigator()
}

beforeEach(() => {
  globalSetup()
})
globalSetup()