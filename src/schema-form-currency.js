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
