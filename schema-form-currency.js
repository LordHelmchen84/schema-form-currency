angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/number/currency.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <div class=\"input-group\">\n    <div class=\"input-group-addon\">{{form.options.unit || (\'number.currency.format.unit\' | translate)}}</div>\n    <input type=\"number\" class=\"form-control\" \n      step=\"any\"\n      sf-changed=\"form\"\n      class=\"{{form.options.uiClass}}\"\n      placeholder=\"{{form.placeholder}}\"\n      ng-model-options=\"form.ngModelOptions\"\n      ng-model=\"$$value$$\"\n      schema-validate=\"form\" />\n  </div>\n  <span ng-if=\"form.feedback !== false\"\n    class=\"form-control-feedback\"\n    ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"></span>\n  <div class=\"help-block\"\n    ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\n    ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n</div>\n");}]);
angular.module('schemaForm-currency', ['schemaForm']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var currency = function(name, schema, options) {
    if ((schema.type == 'number') && schema.format == 'currency') {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'currency';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  };

    schemaFormProvider.defaults.number.unshift(currency);

  //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'currency',
    'directives/decorators/bootstrap/number/currency.html');
    schemaFormDecoratorsProvider.createDirective('currency',
    'directives/decorators/bootstrap/number/currency.html');
  }]);
