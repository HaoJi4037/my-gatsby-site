module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "LteCDVE3mzOt7kGGxMFSaNWBt5M7kg7kfTMHELCtHS0",
        spaceId: "xtjv8w52a1ro",
      },
    },
  ],
};
