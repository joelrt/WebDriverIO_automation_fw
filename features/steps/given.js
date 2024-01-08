const { Given } = require('@wdio/cucumber-framework');
const assert = require('assert');
const HomePage = require('../../pages/home_page.js');
const hp = new HomePage();
const config = require('../../config.js');


Given('the user is on the Google homepage', async function () {
  await hp.open(config.baseURL)
  assert(await hp.current_title() == 'Google')
});
