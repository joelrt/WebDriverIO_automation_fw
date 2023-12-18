const Base = require('./base.js')
const selectors = require('../test_data/locators.json');
const config = require('../../config.js');


module.exports = class ResultPage extends Base{
    async open_item_on_a_new_tab(option){
        const result_search_sections = await this.get_elements(selectors.resultPage.resultSections)
        
        let result_selected;
        let item_selected;
        if (result_search_sections.length > 2){
            item_selected = await result_search_sections[`${parseInt(option)}`].$$('cite')
        } else {
            result_selected = await result_search_sections[1].$$('span a')
            item_selected = result_selected[parseInt(option) + 3]
        }
        const url = await item_selected.getAttribute('href')
        await browser.newWindow(url)
        await browser.pause(config.timeout)
    }
}