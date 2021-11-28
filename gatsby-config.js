require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
module.exports = {
  siteMetadata: {
    title: "e-comerce vape",
  },
  plugins: [
    "gatsby-transformer-json",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-image",
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: 'https://vp-store.herokuapp.com/products',
        rootKey: 'products',
        imageKeys: ["images"],
        schemas: {
          products: `
            type: String
            name: String
            prices: Float
            images: [images]
          `,
          images: `
            url: String
          `
        }
      }
    }

  ],

};
