<p align="center">
    <a href="https://twitter.com/FatalTuesday" target="_blank">
        <img src="docs/banner.jpeg">
    </a>
</p>

<h3 align="center">
    Fatal Tuesday : a Twitter bot for weekly post
</h3>

[@FatalTuesday](https://twitter.com/FatalTuesday) account is a running gag about the french movie [Fatal Bazooka](https://en.wikipedia.org/wiki/Fatal_Bazooka) and more precisely on a scene which highlights a disordered sentence :

> Salut everybody tout le monde ! <br>
> Ça y est c'est mardi, c'est bientôt le week-end !

_Hello everybody everybody ! That's it, it's Tuesday, it's almost the weekend !_ 

And that's why this account posts this passage every **Tuesday**.

# Let's build a bot

This repo aims to share a simple BOT which allows you to post text or images on Twitter.

### Other versions

-   Next.js Version: [https://github.com/splyy/bot-fatal-tuesday-next](https://github.com/splyy/bot-fatal-tuesday-next)

### Twitter

Log in to your [Twitter](https://twitter.com/) account and [create a new app](https://developer.twitter.com/en/portal/dashboard). 

Next, don't forget to set up **user authentication settings** from your app to configure Read and write permission.
Finally, export your **Consumer key** _(API Key and Secret)_ and **Authentication Tokens** _(Access Token and Secret)_ to environnement file _(.env)_ :

```shell
API_KEY="<CONSUMER_KEY>"
API_SECRET="<CONSUMER_SECRET>"

ACCESS_TOKEN="<ACCESS_TOKEN>"
ACCESS_TOKEN_SECRET="<ACCESS_TOKEN_SECRET>"
```

### Run

Install dependencies

```javascript
npm i
```

And to execute your bot 

```javascript
# npm
npm run bot

# node
node bot.js
```

:white_check_mark: That's it, your content is posted on Twitter, based on the information defined in `bot.js`

## License

This repository is available under the [MIT](./LICENSE).
