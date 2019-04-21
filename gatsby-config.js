module.exports = {
  siteMetaData: {
    title: 'site title',
    description: 'site description',
    author: 'Joe Astuccio',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: '',
        short_name: '',
        start_url: '/',
        background_color: '',
        theme_color: '',
        display: 'minimal-ui',
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
        theme_color_in_head: false, // This will avoid adding theme-color meta tag.
      },
    },
  ],
}