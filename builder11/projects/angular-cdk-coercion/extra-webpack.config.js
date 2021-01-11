const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_cdk_coercion': '@angular/cdk/coercion',
  };
  custom.externals.push(
    '@angular/core'
  );
  return custom;
};
