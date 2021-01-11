const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_browser_animations': '@angular/platform-browser/animations',
  };
  custom.externals.push(
    '@angular/common',
    '@angular/core',
    '@angular/animations',
    '@angular/animations/browser',
    '@angular/platform-browser'
  );
  return custom;
};
