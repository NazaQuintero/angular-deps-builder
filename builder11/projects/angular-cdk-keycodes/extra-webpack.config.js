const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const custom = singleSpaAngularWebpack(config, options);
  custom.entry = {
    'angular_cdk_keycodes': '@angular/cdk/keycodes',
  };
  custom.externals.push(
    
  );
  return custom;
};
