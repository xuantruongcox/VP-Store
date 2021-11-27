require('dotenv').config({path: `.env.${process.env.NODE_ENV}`})
module.exports = {
  siteMetadata: {
    title: "e-comerce vape",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
      }
    }
 
  ],

};
