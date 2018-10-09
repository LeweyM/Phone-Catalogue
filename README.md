### Phone Catalogue

A basic phone catalogue component made with React, Redux and Bootstrap-React.

### Getting Started

1. clone the git repository to your local machine.
2. run `npm install` to download all necessary dependencies.
3. run `npm run dev` to run a local version of the website on your machine.
4. navigate to 'localhost:3000' to view the app.
5. run `cd client && npm run test` to run the unit tests.

### Structure

The backend is a simple node/express server which runs on port 5000. It has only two API end points which simulate async behaviour (./phones & ./phonesErr)

The frontend uses Redux to manage simple state changes.

General functionality (popup and loading) are passed to other components as HOCs.

React-bootstrap was used for general stylings.

All components have associated unit tests using Mocha, Enzyme and Chai. This website was developed using TDD principles.
