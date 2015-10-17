Package.describe({
  name: 'kg32:iso-countries',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Convert countries to ISO codes and vice versa.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/KG32/iso-countries.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    //api.versionsFrom('0.9.0');
    api.use(["templating", "meteor-base"], "client");
    //api.addFiles("iso-countries.js", "client");
    api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
    api.addFiles(['iso-countries.js']);
    api.export('convertCountry');
    api.export('convertCountryRev');
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('kg32:iso-countries');
    api.addFiles('iso-countries-tests.js');
});
