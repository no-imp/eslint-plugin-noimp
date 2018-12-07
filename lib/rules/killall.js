/**
 * @fileoverview Rule to ensure that there exist no imp files
 * @author noimp
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

var path = require('path'),
  parseFilename = require('../common/parseFilename'),
  isImpFile = require('../common/isImpFile');

module.exports = function(context) {
  return {
    'Program': function(node) {
      var filename = context.getFilename(),
        absoluteFilename = path.resolve(filename),
        parsed = parseFilename(absoluteFilename),
        isImp = isImpFile(parsed);

      if (isImp) {
        context.report(node, "'imp' files are are bad, very bad ... kill all imps.");
      }
    }
  };
};
