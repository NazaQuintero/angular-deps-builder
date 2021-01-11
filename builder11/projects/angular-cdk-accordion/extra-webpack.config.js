const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_cdk_accordion': '@angular/cdk/accordion',
  };
  custom.externals.push(
    '@angular/cdk/coercion',
    '@angular/cdk/collection',
    '@angular/core',
    'rxjs'
  );
  return custom;
};
