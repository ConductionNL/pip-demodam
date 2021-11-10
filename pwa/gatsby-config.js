require("dotenv").config({
  path: `.env.${process.env}`,
})

module.exports = {
  pathPrefix: "/pip-demodam",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "pwa",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        pathToEmotionCacheProps: `src/emotion-cache-props`,
      },
    },
  ]
};
