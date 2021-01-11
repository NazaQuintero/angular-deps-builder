const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_cdk_platform': '@angular/cdk/platform',
  };
  custom.externals.push(
    '@angular/core',
    '@angular/common'

  );
  return custom;
};
