# Tips
Keep in mind the following TIPS to make better use of the API

## Parameters
Parameters are an essential part of an http request. And we will be using types: **Query**, **Path** and **Headers**

#### Query
The query parameters are the ones that come after the final path and are set with `?` or `&`

**Example:** `https://api.miduwu.ga/group/endpoint?param1=value&param2=value&param3=value`

!> Attention: the first parameter starts with **"?"** and the following ones with **"&"**

#### Path:
The path parameters specify which path to go to, the name doesn't matter as it is only used to point to them.

**Example:** `https://api.miduwu.ga/anime/:type`

__:type__ is the path parameter there and now you need to change it, as example: `https://api.miduwu.ga/anime/kiss`.

!> The name of the parameters by path begin with **":"**, and when replacing the name you must also remove them

#### Headers:
Unlike the previous ones, these are not visible in the link, those parameters are variables that are assigned at the time of making the request.

Commonly these parameters are private for things that must be carefully taken care of.

**Example using Node.js and Axios**
```js
import axios from "axios";

axios.get("https://api.miduwu.ga/super/endpoint", { headers: { "authorization": "private_token" } }).then(response => {
    // do anything
})
```

**Example using BDFD**
```
$httpAddHeader[authorization;private_token]
$httpGet[https://api.miduwu.ga/super/endpoint]

$httpResult
```

**Example using AOI.JS**
```
$jsonRequest[https://api.miduwu.ga/super/endpoint;property;error message;authorization;private_token]
```

!> The use of these must be completely private without access to the visibility of others.

## Properties
By properties, we mean the JSON that emits the http request

### Interface:
```js
{
    "status": number,
    "data": any, // the response data itself, it can be string, number, array or object
    "success": boolean
}
```

### Example:

**Imagine our response is:**
```js
{
 "status": 200,
 "data": {
  "translated": "Bonjour le monde",
  "source": "en",
  "target": "fr"
 },
 "success": true
}
```

Now we want to get the translated text.

**- JS/TS:**
```js
let res = ... // our axios response data
res.data.translated // "Bonjour le monde"
```

**- BDFD:**
```js
$httpGet[...]
$httpResult[data;translated] // Bonjour le monde
```

**- AOI.JS:**
```js
$jsonRequest[...;data.translated] // Bonjour le monde
```

## Documentation bot
To get basic information about an endpoint you can use the bot **Tokyo | トキョ** with the `api` command.

![screenshot](https://cdn.discordapp.com/attachments/852617860404609044/1005922414632374324/unknown.png ':size=480')