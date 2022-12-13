# Getting Started

First, install the necessary dependencies:

```
npm install
```

The required Docker container needs to be running so that the WordPress API can be accessed.  
The repo with the Docker files [can be found here](https://github.com/383Project/383-browsers-frontend). The ReadMe has the full setup instructions.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Exporting

When the project is to be exported, first ensure the following install has been completed

```bash
npm i serve
```

Then complete the following commands, one after another:

```
npm run build,  npm run export,  npm run serve
```

The `out` folder is the only folder that needs to be hosted.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
