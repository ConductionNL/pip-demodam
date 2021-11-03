module.exports = {
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
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        mergeScriptHashes: true,
        mergeStyleHashes: true,
        directives: {
          "script-src": "'self' 'unsafe-eval' https://unpkg.com/",
          "style-src": "'self' 'nonce-true' https://unpkg.com/ 'unsafe-inline'",
          "img-src": "'self' https://demodam.nl/"
        }
      }
    }
  ]
};
