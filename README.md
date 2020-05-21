# Spaced Out


![Spaced-learn](https://user-images.githubusercontent.com/35647384/82595207-d1633580-9b6a-11ea-9a5d-2e3a3055f251.png)

![Spaced-dash](https://user-images.githubusercontent.com/35647384/82595174-c5777380-9b6a-11ea-9e8f-10197c71edcc.png)

React application to help learn Afrikaans using spaced reptition.

See it Live at: [https://spaced-out.now.sh/](https://spaced-out.now.sh/register)

## Setup Locally

To setup the application on your local machine:

1. Fork and clone the project to your machine
2. `npm install`. This will also install the application _Cypress.io_ for running browser integration tests

The project expects you have the Spaced Out API project setup and running on http://localhost:8000.

Find instructions to setup the API here [https://github.com/thinkful-ei-macaw/spaced-repetition-api-IJ](https://github.com/thinkful-ei-macaw/spaced-repetition-api-IJ).

## Running project

This is a `create-react-app` project so `npm start` will start the project in development mode with hot reloading by default.

## Running the tests

This project uses [Cypress IO](https://docs.cypress.io) for integration testing using the Chrome browser.

Cypress has the following expectations:

- You have cypress installed (this is a devDependency of the project)
- You have your application running at http://localhost:3000.
  - You can change the address of this expectation in the `./cypress.json` file.
- Your `./src/config.js` is using http://localhost:8000/api as the `API_ENDPOINT`

To start the tests run the command:

```bash
npm run cypress:open
```

On the first run of this command, the cypress application will verify its install. Any other runs after this, the verification will be skipped.

The command will open up the Cypress application which reads tests from the `./cypress/integration/` directory. You can then run individual tests by clicking on the file names or run all tests by clicking the "run all tests" button in the cypress GUI.

Tests will assert against your running localhost client application.

You can also start all of the tests in the command line only (not using the GUI) by running the command:

```bash
npm run cypress:run
```

This will save video recordings of the test runs in the directory `./cypress/videos/`.
