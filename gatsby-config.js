module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Abhijith Chandran',
    // Main Site Title
    title: `Abhijith Chandran's Personal Website`,
    // Description that goes under your name in main bio
    description: `Applied-Math + CS @Brown.`,
    // Optional: Twitter account handle
    //  author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/achand40`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ryanafitzgerald/`,
    // Content of the About Me section
    about: `Wanting to work at the intersection of math, code and business.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Penden',
        description:
          'NLP powered Chrome Extension to make it easier for the blind to naviagate the internet. Built with JavaScript, Python, Docker and ElasticSearch',
        link: 'https://github.com/achand40/penden',
      },
      {
        name: 'Lawculus',
        description:
          'Search engine for India lawyers. Built using BERT + Elasticsearch. Scaled to 5000+ queries per day.',
        link: './',
      },
      {
        name: 'COVID Management',
        description:
          'Created a system for school officials to alert and manage COVID outbreaks. Used in 6 schools.',
        link: './',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Ernest and Young',
        description: 'Full-Stack intern, April - July 2021',
        link: './',
      },
      {
        name: 'LawIndia',
        description: 'Founded LawIndia, which ran Lawculus. Used by 220+ lawyers',
        link: '',
      },

    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Python',
      },
      {
        name: 'Databases',
        description: 'PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, ElasticSearch, AWS, GCP',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
