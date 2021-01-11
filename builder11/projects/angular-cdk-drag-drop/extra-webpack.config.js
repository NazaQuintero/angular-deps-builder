const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_cdk_drag_drop': '@angular/cdk/drag-drop',
  };
  custom.externals.push(
    '@angular/common',
    '@angular/core',
    '@angular/cdk/bidi',
    '@angular/cdk/coercion',
    '@angular/cdk/platform',
    '@angular/cdk/scrolling'
  );
  return custom;
};
