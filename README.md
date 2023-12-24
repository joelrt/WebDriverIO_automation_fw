# WebDriverIO Project

This is a WebDriverIO project with Cucumber for behavior-driven testing of google search.

## Installation

1. **Clone (copy) the repository:**

    ```bash
    git clone repo_URL
    cd your-repo
    ```

2. **Install npm packages:**

    ```bash
    npm install
    ```

## Running WebDriverIO Tests

Execute the following command to run WebDriverIO tests:

```bash
npm run wdio
```

## Project Structure
The project follows the following structure:

features/tests: Contains Gherkin feature files.
features/steps: Contains Cucumber step definitions.
feature/pages: Contains base methos following POM style

The primary files and directories are organized as follows:

```
├── pages/
│   └── base.js
│   └── home_page.js
│   └── result_page.js
├── test_data/
│   └── locators.json
├── tests/
│   └── features/
│       └── search.feature
│   └── steps
│       └── given.js
│       └── then.js
│       └── when.js
├── .gitignore
├── config.js
├── cucumber.js
├── wdio.conf.js
├── package.json
└── README.md
```