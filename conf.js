/**
 * Created by Stwippie on 25/12/2016.
 */
// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  capabilities: {
    'browserName': 'phantomjs',
  }
};
