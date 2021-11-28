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
      resolve: "gatsby-source-custom-api",
      options: {
        url: {
          development: 'https://vp-store.herokuapp.com/users',
          production: 'https://vp-store.herokuapp.com/users'
        },
        rootKeys: 'users',
        schemas: {
          users: `
            name: String
            email: String
            password: String
          `
        }
      }
    }
 
  ],

};
