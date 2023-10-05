import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv';

dotenv.config()

const client = new TwitterApi({ 
    appKey: process.env.API_KEY, 
    appSecret: process.env.API_SECRET, 
    accessToken: process.env.ACCESS_TOKEN, 
    accessSecret: process.env.ACCESS_SECRET 
});

// First, upload your media on Twitter
// const mediaId = await client.v1.uploadMedia('./video.mp4');
// console.log(mediaId);

// Then post
// mediaId is a string[], can be given to .tweet
await client.v2.tweet('toto');

// finally `npm run bot` to execute