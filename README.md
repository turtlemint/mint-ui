### Usage if installed from npm
1. yarn add 'tm-components'
2. import Label from 'tm-components/label';

### Usage if installed from git url

1. `yarn add https://gitlab.com/turtlemint/tm-components.git`
2. `import Label from 'tm-components/dist/label';`

### Common Issue with git url

Issue - fatal: could not read Username for 'https://gitlab.com': terminal prompts disabled

Solution - Run this command `git config --global --add url."git@gitlab.com:".insteadOf "https://gitlab.com"`

### Contribution

1. git clone https://gitlab.com/turtlemint/tm-components.git
2. yarn install
3. yarn start
4. do your thing and submit a PR


### What's more in this from base repo?

1. Storybook configuration

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `yarn run build:staging`

Builds the app for staging to the `build` folder. <br>
It picks up the environment from the `.env-cmdrc` file `staging` object

### `yarn run lint`

It simply runs tslint to list down the errors.

### `yarn run lint:fix`

It fixes the errors if any of the lint


### `yarn analyze`

This checks for bundle size and spins up a separate link for a view window

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).