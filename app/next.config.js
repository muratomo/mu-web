const withSass = require('@zeit/next-sass');

module.exports = withSass({
  /* config options here */
  exportPathMap: () => {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    };
  }
});
