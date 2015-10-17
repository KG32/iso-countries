Package.describe({
  name: 'kg32:iso-countries',
  version: '1.0.0',
  summary: 'Convert countries to ISO codes and vice versa.',
  git: 'https://github.com/KG32/iso-countries.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
    api.use(["templating", "meteor-base"], "client");
    api.addFiles(['iso-countries.js']);
    api.export('convertCountryName');
    api.export('convertCountryCode');
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('kg32:iso-countries');
    api.addFiles('iso-countries-tests.js');
});
