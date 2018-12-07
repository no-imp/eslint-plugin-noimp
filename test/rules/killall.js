var indexRule = require('../../lib/rules/killall'),
  RuleTester = require('eslint').RuleTester;

var testCode = 'var foo = true',
  ruleTester = new RuleTester();

ruleTester.run('lib/rules/killall', indexRule, {
  valid: [
    {
      code: testCode,
      filename: 'foo.js'
    },
    {
      code: testCode,
      filename: '/some/dir/foo.js'
    }
  ],

  invalid: [
    {
      code: testCode,
      filename: 'IMPLEMENTATION.js',
      errors: [
        { message: '\'imp\' files are are bad, very bad ... kill all imps.', column: 1, line: 1 }
      ]
    },
    {
      code: testCode,
      filename: '/some/dir/kittenImplodesYetAgain.js',
      errors: [
        { message: '\'imp\' files are are bad, very bad ... kill all imps.', column: 1, line: 1 }
      ]
    }
  ]
});
