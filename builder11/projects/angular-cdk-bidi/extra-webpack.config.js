const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_cdk_bidi': '@angular/cdk/bidi',
  };
  custom.externals.push(
    '@angular/common',
    '@angular/core'
  );
  return custom;
};
