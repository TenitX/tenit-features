# tenit-features
Typescript/Javascript client library for interacting with the Tenit Features tool managing feature flags.

## Installation 
```bash
# Yarn
yarn add tenit-features

# NPM
npm install tenit-features
```

## Usage
As early in your web app's lifecycle you'll want to initialize the library with the `init()` function. For most, this will be in the `App.js` file of your project.
```js
import * as Feature from "tenit-features";

// 1002 = Your account id
Feature.init(1002);
```

```js
import * as Feature from "tenit-features";

// Checking if the feature is enabled for user 123
const isMyFeatureEnabled : Boolean = await Features.isEnabled("my-feature", 123);
```

## Tenit Features
Not yet using Tenit Features to manage feature flags in your apps? Check out https://app.tenitx.com/features