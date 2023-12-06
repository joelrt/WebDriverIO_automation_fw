const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Base {
    open (url) {
        return browser.url(url)
    }
    get_element(locator){
        return $(locator)
    }
    get_elements(locator){
        return $$(locator)
    }
    click_element(element){
        return element.click()
    }
    current_title () {
        return browser.getTitle()
    }
    type_in_field (locator, text) {
        return this.get_element(locator).setValue(text)
    }
    get_text (element) {
        return element.getText()
    }
    press_esc_key () {
        return browser.keys(['\uE004'])
    }
}
