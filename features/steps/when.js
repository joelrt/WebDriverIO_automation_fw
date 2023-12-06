const { When } = require('@wdio/cucumber-framework')
const HomePage = require('../pages/home_page.js');
const ResultPage = require('../pages/result_page.js');
const hp = new HomePage();
const rp = new ResultPage();

When('the user enters {} in the search bar', async function (word) {
  this.word = word
  await hp.type_in_field('textarea[type="search"]', word)
  await hp.press_esc_key()
});

When('the user opens the result {} in a new tab', async function (option) {
  await rp.open_item_on_a_new_tab(option)
});