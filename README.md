# Broadway

[![Netlify Status](https://api.netlify.com/api/v1/badges/5b572a21-28e3-48ff-820a-8b95aafc2ba8/deploy-status)](https://app.netlify.com/sites/enchanting-blancmange-3bcee2/deploys)

Based on the Next + Netlify Starter and inspired by https://www.neutralcafe.tv/, this is an open-source project for online communities to launch their own websites to showcase any specified streamers who are currently live on Twitch.

- [Quick(ish) Start Guide](#quick-ish--start-guide)
- [Development](#development)
  * [Running Locally](#running-locally)
  * [Editing the streamer list](#editing-the-streamer-list)
  * [Deployment](#deployment)
- [Contributions](#contributions)

## Quick(ish) Start Guide

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dirty-fisherman/Broadway#NEXT_PUBLIC_LOGO_URL=https://i.imgur.com/Kd6rnLN.png&NEXT_PUBLIC_BACKGROUND=2e2b38&NEXT_PUBLIC_NAME=Broadway)

Click this button to automatically set up a website on Netlify. You'll be guided through the steps to create a GitHub account (if you don't have one), a Netlify account, and all the information needed to make your website yours!

You will need the following things:

- An Twitch developer account (sign up here https://dev.twitch.tv/)
- An app registered on Twitch (https://dev.twitch.tv/console/apps)
- Your Twitch app credentials


## Development

This guide assumes that you have some knowledge of web development, working with APIs, and Netlify's platform.

Broadway relies on Netlify Functions to make calls to Twitch's APIs as they currently require authentication to fetch public streamer data.

You will need to add the following locally to a `.env` file in the root directory of the project (and to add these environment variables to your Netilify account). If you pressed the quick start button above, you've already done this.

```env
TWITCH_CLIENT_ID=your-twitch-client-id
TWITCH_CLIENT_SECRET=your-twitch-client-secret
```

If you have a Twitch developer account you can get these credentials over at https://dev.twitch.tv/console/apps by registering an application.

### Running Locally

- Clone this repo
- Install dependencies with `npm install`
- Start the dev server with `netlify dev`

### Setting up environment variables

The project is customised via environment variables, an example has been provided in the project, however you will need to copy all of these into your own `.env` file in the root directory of the project to run the project locally.

**.env.example**
```
TWITCH_CLIENT_ID=YOUR TWITCH CLIENT ID GOES HERE
TWITCH_CLIENT_SECRET=YOUR TWITCH SECRET GOES HERE
STREAMERS=streamer1,streamer2,streamer3
NEXT_PUBLIC_DISCORD_URL=https://discord.com/
NEXT_PUBLIC_LOGO_URL=https://i.imgur.com/Kd6rnLN.png
NEXT_PUBLIC_BACKGROUND=2e2b38
NEXT_PUBLIC_NAME=Broadway Demo Site
```

### Deployment

Deployment is all handled by Netlify once you've got your account all set up - you just push your changes via GitHub and BOOM the site is updated. That's right, BOOM.

## Contributions

Contributions are welcome! Open up a PR if you want to add tests, if you want to fix things, if you want to make this any easier for people to deploy. I'll do my best to review when I have the time and/or the energy.

My dream for this project was to create something as simple as possible for community owners to set up, sadly it's a bit more involved than I had initially thought, but hopefully this will give you a good starting point!