// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'phantomjs',
    javascriptEnabled: 'true'
  },
  baseUrl: 'http://localhost:8080/',
  framework: 'custom',
  frameworkPath: require.resolve('serenity-js'),
  mochaOpts: {
    ui:       'bdd',                  // use the describe/it syntax (default: 'bdd').
    compiler: 'ts:ts-node/register',
    colors: 'true',
    reporter: 'spec',
    slow: 3000,
    timeout: 30000,
  }
};
