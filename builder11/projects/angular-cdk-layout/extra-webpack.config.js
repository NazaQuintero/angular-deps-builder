const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_cdk_layout': '@angular/cdk/layout',
  };
  custom.externals.push(
    '@angular/cdk/coercion',
    '@angular/cdk/platform',
    '@angular/core',
    'rxjs',
    'rxjs/operators'
  );
  return custom;
};
