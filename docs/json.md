## ![get](_media/get.svg ':size=38') /json/8ball
Get a random 8ball response, (multi-idiom available)

- **Path:** `https://api.miduwu.ga/json/8ball` [(Click)](https://api.miduwu.ga/json/8ball)
- **Returns:** `Object`
#### Query Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ---- | ---- |
|text|String|The question to do.|False|
|idiom|String|Some idiom (ES, EN, PT, FR)|True|



## ![get](_media/get.svg ':size=38') /json/ascii
Asciify your text.

- **Path:** `https://api.miduwu.ga/json/ascii` [(Click)](https://api.miduwu.ga/json/ascii)
- **Returns:** `Object`
#### Query Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ---- | ---- |
|text|String|The text to asccify.|False|



## ![get](_media/get.svg ':size=38') /json/binary
Decode or encode a texto to binary or vice versa.

- **Path:** `https://api.miduwu.ga/json/binary` [(Click)](https://api.miduwu.ga/json/binary)
- **Returns:** `Object`
#### Query Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ---- | ---- |
|text|String|The text to encode or decode.|False|



## ![get](_media/get.svg ':size=38') /json/coinflip
Get a random (or specified) image from a coinflip.

- **Path:** `https://api.miduwu.ga/json/coinflip` [(Click)](https://api.miduwu.ga/json/coinflip)
- **Returns:** `Object`
#### Query Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ---- | ---- |
|type|String|The coinflip type: head \| tail \| random. Default is 'random'|True|



## ![get](_media/get.svg ':size=38') /json/define
Define a term from the urban dictionary.

- **Path:** `https://api.miduwu.ga/json/define` [(Click)](https://api.miduwu.ga/json/define)
- **Returns:** `Object`
#### Query Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ---- | ---- |
|query|String|The term to define.|False|
|max|Number|The items max for result, default is 1.|True|



## ![get](_media/get.svg ':size=38') /json/discorduser
Obtain a data from a JSON object from the parameters and the endpoint.

- **Path:** `https://api.miduwu.ga/json/discorduser` [(Click)](https://api.miduwu.ga/json/discorduser)
- **Returns:** `Object`
#### Query Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ---- | ---- |
|userid|Discord.Snowflake|Discord User id to search.|False|



## ![get](_media/get.svg ':size=38') /json/gis
Search images in google.

- **Path:** `https://api.miduwu.ga/json/gis` [(Click)](https://api.miduwu.ga/json/gis)
- **Returns:** `Object`
#### Query Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ---- | ---- |
|query|String|The query to search in google.|False|



## ![get](_media/get.svg ':size=38') /json/github
Get information about a github user.

- **Path:** `https://api.miduwu.ga/json/github` [(Click)](https://api.miduwu.ga/json/github)
- **Returns:** `Object`
#### Query Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ---- | ---- |
|username|String|The user username.|False|



## ![get](_media/get.svg ':size=38') /json/hastebin
Upload a code or text to hastebin.

- **Path:** `https://api.miduwu.ga/json/hastebin` [(Click)](https://api.miduwu.ga/json/hastebin)
- **Returns:** `Object`
#### Query Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ---- | ---- |
|text|String|The code to upload.|False|
|extension|String|The extension of the file, default is `.txt`|True|



## ![get](_media/get.svg ':size=38') /json/minecraft
Get a minecraft server stats.

- **Path:** `https://api.miduwu.ga/json/minecraft` [(Click)](https://api.miduwu.ga/json/minecraft)
- **Returns:** `Object`
#### Query Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ---- | ---- |
|ip|String|The server IP.|False|



## ![get](_media/get.svg ':size=38') /json/npm
Search a package in npmjs.com

- **Path:** `https://api.miduwu.ga/json/npm` [(Click)](https://api.miduwu.ga/json/npm)
- **Returns:** `Object`
#### Query Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ---- | ---- |
|query|String|Package name, spaces will be replaced by '-'|False|



## ![get](_media/get.svg ':size=38') /json/owoify
Owoify this text.

- **Path:** `https://api.miduwu.ga/json/owoify` [(Click)](https://api.miduwu.ga/json/owoify)
- **Returns:** `Object`
#### Query Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ---- | ---- |
|text|String|The text to convert.|False|



## ![get](_media/get.svg ':size=38') /json/repository
Displays the basic information from a github repository.

- **Path:** `https://api.miduwu.ga/json/repository` [(Click)](https://api.miduwu.ga/json/repository)
- **Returns:** `Object`
#### Query Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ---- | ---- |
|query|String|The repository name. Ex: Username/Repo, Repo|False|



## ![get](_media/get.svg ':size=38') /json/reverse
Reverse this text.

- **Path:** `https://api.miduwu.ga/json/reverse` [(Click)](https://api.miduwu.ga/json/reverse)
- **Returns:** `Object`
#### Query Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ---- | ---- |
|text|String|The text to convert.|False|



## ![get](_media/get.svg ':size=38') /json/time
Displays the basic actual time data.

- **Path:** `https://api.miduwu.ga/json/time` [(Click)](https://api.miduwu.ga/json/time)
- **Returns:** `Object`
#### Query Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ---- | ---- |
|timezone|String|The timezone|True|



## ![get](_media/get.svg ':size=38') /json/topgg
Check if a user has voted for your bot in top.gg.

- **Path:** `https://api.miduwu.ga/json/topgg` [(Click)](https://api.miduwu.ga/json/topgg)
- **Returns:** `Object`
#### Query Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ---- | ---- |
|user|String|The user ID.|False|
|bot|String|The bot ID.|False|
|token|String|Super private top.gg token.|False|



## ![get](_media/get.svg ':size=38') /json/translate
Translate a text, you need source and target idioms.

- **Path:** `https://api.miduwu.ga/json/translate` [(Click)](https://api.miduwu.ga/json/translate)
- **Returns:** `Object`
#### Query Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ---- | ---- |
|source|String|Source language abbreviation.|False|
|target|String|Target language abbreviation.|False|
|text|String|The text to translate.|False|



## ![get](_media/get.svg ':size=38') /json/weather
Get weather information from a city.

- **Path:** `https://api.miduwu.ga/json/weather` [(Click)](https://api.miduwu.ga/json/weather)
- **Returns:** `Object`
#### Query Parameters:
| Name | Type | Description | Optional |
| ---- | ---- | ---- | ---- |
|query|String|City name.|False|
|degree|String|Degree type, choices: F \| C. Default is C|True|

