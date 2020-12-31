const withSass = require('@zeit/next-sass');

module.exports = withSass({
  /* config options here */
  exportTrailingSlash: true,
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/development': { page: '/development' }
    };
  }
});
