const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
    dest: 'public',
    runtimeCaching,
});

module.exports = withPWA({
    sassOptions: {
        additionalData: `@import "styles/mixins.scss"; @import "styles/variables.scss";`,
    },
    i18n: {
        locales: ["ru"],
        defaultLocale: "ru",
      },
});