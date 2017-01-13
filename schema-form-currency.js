angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/number/currency.html","<div class=\"form-group schema-form-{{form.type}} {{form.htmlClass}}\" ng-class=\"{\'has-error\': form.disableErrorState !== true && hasError(), \'has-success\': form.disableSuccessState !== true && hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n    <label class=\"control-label {{form.labelHtmlClass}}\" ng-class=\"{\'sr-only\': !showTitle()}\" for=\"{{form.key.slice(-1)[0]}}\">{{form.title}}</label>\n\n    <input\n        ng-if=\"!form.fieldAddonLeft && !form.fieldAddonRight\"\n        ng-show=\"form.key\"\n        type=\"{{form.type}}\"\n        step=\"any\"\n        sf-changed=\"form\"\n        placeholder=\"{{form.placeholder}}\"\n        class=\"form-control {{form.fieldHtmlClass}}\"\n        id=\"{{form.key.slice(-1)[0]}}\"\n        sf-field-model\n        ng-disabled=\"form.readonly\"\n        schema-validate=\"form\"\n        name=\"{{form.key.slice(-1)[0]}}\"\n        aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\">\n\n    <div ng-if=\"form.fieldAddonLeft || form.fieldAddonRight\" ng-class=\"{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}\">\n        <span ng-if=\"form.fieldAddonLeft\" class=\"input-group-addon\" ng-bind-html=\"form.fieldAddonLeft\"></span>\n        <input\n            ng-show=\"form.key\"\n            type=\"{{form.type}}\"\n            step=\"any\"\n            sf-changed=\"form\"\n            placeholder=\"{{form.placeholder}}\"\n            class=\"form-control {{form.fieldHtmlClass}}\"\n            id=\"{{form.key.slice(-1)[0]}}\"\n            sf-field-model\n            ng-disabled=\"form.readonly\"\n            schema-validate=\"form\"\n            name=\"{{form.key.slice(-1)[0]}}\"\n            aria-describedby=\"{{form.key.slice(-1)[0] + \'Status\'}}\">\n\n        <span ng-if=\"form.fieldAddonRight\" class=\"input-group-addon\" ng-bind-html=\"form.fieldAddonRight\"></span>\n    </div>\n\n    <span ng-if=\"form.feedback !== false\" class=\"form-control-feedback\" ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\" aria-hidden=\"true\"></span>\n\n    <span ng-if=\"hasError() || hasSuccess()\" id=\"{{form.key.slice(-1)[0] + \'Status\'}}\" class=\"sr-only\">{{ hasSuccess() ? \'(success)\' : \'(error)\' }}</span>\n\n    <div class=\"help-block\" sf-message=\"form.description\"></div>\n</div>\n");}]);
angular.module('schemaForm-currency', ['schemaForm']).config(
    ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
        function(schemaFormProvider, schemaFormDecoratorsProvider, sfPathProvider) {

            var currency = function(name, schema, options) {
                if ((schema.type == 'number') && schema.format == 'currency') {
                    var f = schemaFormProvider.stdFormObj(name, schema, options);
                    f.key = options.path;
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
        }
    ]);
