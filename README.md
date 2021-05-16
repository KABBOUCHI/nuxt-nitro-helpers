# nuxt-nitro-helpers

## Install

Install package:

```bash
yarn add nuxt-nitro-helpers
# or
npm install nuxt-nitro-helpers
```

## Usage

```js
// ./servers/api/posts.ts

import { useRoute } from "nuxt-nitro-helpers";

export default useRoute({
  get() {
    return "GET /posts";
  },

  post(_, res) {
    res.statusCode = 201;
    return "POST /posts";
  }
});
```