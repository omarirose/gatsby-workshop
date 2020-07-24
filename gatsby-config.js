module.exports = {
  siteMetadata: {
    title: `Omari Rose Blog`,
    author: `Omari Rose`,
    description: `Omari Rose personal site for Gatby workshop`,
    siteUrl: `https://gatsby-codeland-101.netlify.app`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/OmariRose`,
      },
      {
        name: `Github`,
        url: `https://www.github.com/omarirose`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
        mdxOtherwiseConfigured: true,
      },
    },
  ],
};
