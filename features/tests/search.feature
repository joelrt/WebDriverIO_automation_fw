Feature: Search for Selenium on Google

  Scenario: Open Google, search for Selenium, and open the second result in a new tab

    Given the user is on the Google homepage
    When the user enters selenium in the search bar
    Then the user clicks on the search button
    Then the search results page is displayed
    When the user opens the result 2 in a new tab
    Then the second result page is opened in a new tab