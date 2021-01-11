const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_cdk_scrolling': '@angular/cdk/scrolling',
  };
  custom.externals.push(
    '@angular/cdk/bidi',
    '@angular/cdk/coercion',
    '@angular/cdk/collections',
    '@angular/cdk/platform',
    '@angular/common',
    '@angular/core',
    'rxjs',
    'rxjs/operators'
  );
  return custom;
};
