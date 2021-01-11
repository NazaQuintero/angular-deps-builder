const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_cdk_collections': '@angular/cdk/collections',
  };
  custom.externals.push(
    '@angular/core',
    'rxjs'
  );
  return custom;
};
