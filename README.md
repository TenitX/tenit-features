# Tenit Features JS/TS Client
Typescript/Javascript client library for interacting with the Tenit Features tool managing feature flags.

## Installation 
```bash
# Yarn
yarn add tenit-features

# NPM
npm install tenit-features
```

## Usage
Early in your app's lifecycle you'll want to initialize the library with the `init()` function and include the api token you've created ([Find your API tokens here](https://app.tenitx.com/features/api-tokens)). For most, this will be in the `App.ts`/`App.js` file of your project.

# 
```js
import * as Feature from "tenit-features";

Feature.init("your-api-token");
```

```js
import * as Feature from "tenit-features";

// Checking if the feature is enabled for user abc-123
const isMyFeatureEnabled : Boolean = await Features.isEnabled("my-feature", "abc-123");
```

Note: If you're using react, we recommend managing the state of the flags in a `useState` value and fetching it using a `useEffect` like this:
```js
import * as Feature from "tenit-features";


 const [isMyFeatureEnabled, setIsMyFeatureEnabled] = useState(false);

  useEffect(() => {
    Feature.isEnabled("newUi", "abc-123").then(setIsMyFeatureEnabled);
  }, []);

```

## Tenit Features
Not yet using Tenit Features to manage feature flags in your apps? [Learn more about it here.](https://tenitx.com/feature-flags?utm_source=github&utm_content=features_js_ts_client)