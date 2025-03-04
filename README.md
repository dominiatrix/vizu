
# Vizu

A simple web app to display, search and download images from Unsplash.

Check the live site here : https://juplash.vercel.app

**NB: This project is only a demo and should never be in production because it's a stock photo aggregator and then it falls under a competing or similar site to Unsplash.**



## Run Locally

Clone the project

```bash
  git clone https://github.com/dominiatrix/vizu.git
```

Go to the project directory

```bash
  cd vizu
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run fully this project and be able to actually see the images, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_UNSPLASH_ACCESS_KEY`

You can find this Unsplash api key after creating your developer account and your application on https://unsplash.com/documentation#creating-a-developer-account. 



## Features

- Search images + infinite loader pagination
- Download images


