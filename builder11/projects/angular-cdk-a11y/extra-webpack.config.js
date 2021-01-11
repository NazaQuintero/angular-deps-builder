const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_cdk_a11y': '@angular/cdk/a11y',
  };
  custom.externals.push(
    '@angular/common',
    '@angular/core',
    '@angular/cdk/coercion',
    '@angular/cdk/keycodes',
    '@angular/cdk/observers',
    '@angular/cdk/platform',
    'rxjs',
    'rxjs/operators'
  );
  return custom;
};
