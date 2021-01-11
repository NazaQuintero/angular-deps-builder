const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_cdk_observers': '@angular/cdk/observers',
  };
  custom.externals.push(
    'rxjs',
    'rxjs/operators'
  );
  return custom;
};
