module.exports = {
  blogPostDir: 'projects', // The name of directory that contains your posts.
  siteTitle: 'Jeffrey Eichert | Portfolio', // Site title.
  siteTitleAlt: 'Jeffrey Eichert', // Alternative site title for SEO.
  siteLogo: '/logos/logo.png', // Logo used for SEO and manifest.
  siteUrl: 'https://jeichert.github.io', // Domain of your website without pathPrefix.
  pathPrefix: '/gatsby-advanced-starter', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'Portfolio of Jeffrey Eichert, Architectural Designer', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-47311644-5', // GA tracking ID.
  disqusShortname: '', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  userName: 'Jeff Eichert', // Username to display in the author segment.
  userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'New York, NY', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  navigationLinks: [
    {
      label: 'Home',
      url: '/'
    },
    {
      label: 'About',
      url: '/about'
    },
    {
      label: 'Work',
      url: '/work'
    },
    {
      label: 'Contact',
      url: '/contact'
    }
  ],
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/jeichert/gatsby-portfolio',
      iconClassName: 'fa fa-github'
    },
    {
      label: 'Email',
      url: 'mailto:jeffrey.eichert@gmail.com',
      iconClassName: 'fa fa-envelope'
    }
  ],
  copyright: 'Copyright © 2017. Jeffrey Eichert', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0' // Used for setting manifest background color.
}
