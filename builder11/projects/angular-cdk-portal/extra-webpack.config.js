const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_cdk_portal': '@angular/cdk/portal',
  };
  custom.externals.push(
    '@angular/common',
    '@angular/core'
  );
  return custom;
};
