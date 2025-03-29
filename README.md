

Make a file `.env.json` in the root of the project, based on [the example file](https://github.com/sellflow/sellflow/tree/master/.env-example.json). This will contain your Shopify API Key (mentioned above).

```sh
cp .env-example.json .env.json
```

Install dependencies:

```sh
yarn && yarn apollo:generate
```

Run the app:

```sh
yarn start
```

