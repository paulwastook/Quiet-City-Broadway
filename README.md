# Broadway

[![Netlify Status](https://api.netlify.com/api/v1/badges/5b572a21-28e3-48ff-820a-8b95aafc2ba8/deploy-status)](https://app.netlify.com/sites/enchanting-blancmange-3bcee2/deploys)

Based on the Next + Netlify Starter and inspired by https://www.neutralcafe.tv/, this is an open-source project for online communities to launch their own websites to showcase any specified streamers who are currently live.

- [TL;DR](#tl-dr)
- [Development](#development)
  * [Running Locally](#running-locally)
  * [Editing the streamer list](#editing-the-streamer-list)
  * [Deployment](#deployment)
- [Contributions](#contributions)

## TL;DR

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dirty-fisherman/Broadway)

Can't be arsed to read? Know what you're doing? Register an app over at https://dev.twitch.tv/console/apps, note down your client ID and secret (you'll be asked for them), and press this button. This will take you through the steps need to clone the project on GitHub and deploy it on your own Netlify account.

## Development

This guide assumes that you have some knowledge of web development, working with APIs, and Netlify's platform.

Broadway relies on Netlify Functions to make calls to Twitch's APIs as they currently require authentication to fetch public streamer data.

You will need to add the following locally to a `.env` file in the root directory of the project (and to add these environment variables to your Netilify account)

```env
TWITCH_CLIENT_ID=your-twitch-client-id
TWITCH_CLIENT_SECRET=your-twitch-client-secret
```

If you have a Twitch developer account you can get these credentials over at https://dev.twitch.tv/console/apps by registering an application.

### Running Locally

- Clone this repo
- Install dependencies with `npm install`
- Start the dev server with `netlify dev`


### Editing the streamer list

The source for the streamer list is over at `functions/data/streamers.json`, replace the names in the array with your streamers of choice and they will appear on the website when they are live.

### Deployment

Deployment is all handled by Netlify once you've got your account all set up - you just push your changes via GitHub and BOOM the site is updated. That's right, BOOM.

## Contributions

Contributions are welcome! Open up a PR if you want to add tests, if you want to fix things, if you want to make this any easier for people to deploy. I'll do my best to review when I have the time and/or the energy.

My dream for this project was to create something as simple as possible for community owners to set up, sadly it's a bit more involved than I had initially thought, but hopefully this will give you a good starting point!