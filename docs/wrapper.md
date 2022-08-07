# Using the wrapper (node.js) <!-- {docsify-ignore-all} -->
You can use the official package to make API requests in a faster and safer way

### Install
```
npm i tokyo-api.ts
```

### Example
```js
import { Image, Json, Anime } from "tokyo-api.ts"

Image('supreme', {
    "text" "Test"
}).then(buffer => {
    // do anything
});

Json('translate', {
    "source": "auto",
    "target": "fr",
    "text": "Hello world."
}).then(object => {
    // do anything
});
```

### Functions

#### Image:
`Image(endpoint: string, parameters: Record<string, any>): Promise<any>`
#### JSON:
`Json(endpoint: string, parameters: Record<string, any>): Promise<any>`
#### Anime:
`Anime(endpoint: string, parameters: Record<string, any>): Promise<any>`
#### Get information:
`getInfo(endpoint: string): Promise<any>`

?> 💡 **TIP:** Check out our Github repository [here](https://github.com/Miduwu/T-API.js/tree/dev)