const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const merged = singleSpaAngularWebpack(config, options);
  merged.externals = merged.externals || [];
  if (Array.isArray(merged.externals)) {
    merged.externals.push('@mfe-demo/event-bus');
  } else if (typeof merged.externals === 'object') {
    merged.externals['@mfe-demo/event-bus'] = '@mfe-demo/event-bus';
  }
  return merged;
};
