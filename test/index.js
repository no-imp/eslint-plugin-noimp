var expect = require('chai').expect,
  index = require('../index.js'),
  killall = require('../lib/rules/killall');

describe('index.js', function () {
  'use strict';

  it('should export the noimp rule', function () {
    expect(index.rules['killall']).to.equal(killall);
  });
});
