const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_cdk_overlay': '@angular/cdk/overlay',
  };
  custom.externals.push(
    '@angular/cdk/bidi',
    '@angular/cdk/coercion',
    '@angular/cdk/keycodes',
    '@angular/cdk/platform',
    '@angular/cdk/portal',
    '@angular/cdk/scrolling',
    '@angular/common',
    '@angular/core',
    'rxjs',
    'rxjs/operators'
  );
  return custom;
};
