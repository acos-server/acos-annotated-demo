var htmlencode = require('htmlencode').htmlEncode;

var Annotated = function() {};

Annotated.addToHead = function(params) {
  return '<script src="/static/annotated-demo/examples.js" type="text/javascript"></script>\n';
};

Annotated.addToBody = function(params) {
  return '<div class="annotated-example" data-id="' + htmlencode(params.name) + '"></div>';
};

Annotated.initialize = function(req, params, handlers, cb) {

  // Initialize the content package
  params.headContent += Annotated.addToHead(params);
  params.bodyContent += Annotated.addToBody(params);

  cb();

};

Annotated.register = function(handlers) {
  handlers.contentPackages['annotated-demo'] = Annotated;
  handlers.contentTypes.annotated.installedContentPackages.push(Annotated);
};

Annotated.namespace = 'annotated-demo';
Annotated.contentTypeNamespace = 'annotated';
Annotated.packageType = 'content';

Annotated.meta = {
  'name': 'annotated-demo',
  'shortDescription': 'A demonstration for annotated examples.',
  'description': '',
  'author': 'Teemu Sirkiä',
  'license': 'MIT',
  'version': '0.0.1',
  'url': '',
  'teaserContent': ['demo'],
  'contents': {
    'demo': {
      'description': '',
      'order': 0,
      'title': 'Demo'
    }
  }
};

module.exports = Annotated;
