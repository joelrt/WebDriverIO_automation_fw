const { Then } = require('@wdio/cucumber-framework')
const assert = require('assert');
const ResultPage = require('../../pages/result_page.js');
const rp = new ResultPage();
const selectors = require('../../test_data/locators.json');


Then('the user clicks on the search button', async function () {
  const search_button = await rp.get_elements(selectors.homePage.searchButton)[1]
  await rp.click_element(search_button)
});

Then('the search results page is displayed', async function () {
  const current_title = await rp.current_title()
  assert(current_title.includes(this.word))
});
  
Then('the second result page is opened in a new tab', async function () {
  const tab_count = await browser.getWindowHandles()
  assert(tab_count.length == 2)
});
