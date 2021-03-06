currency input for schema-form
=================

This currency input add-on is an enhancement for the default number type.
It sets step for number field to any to allow float number.


Installation
------------
To use it, just include
`schema-form-currency.min.js`.

Easiest way is to install is with bower, this will also include dependencies:
```bash
$ bower install LordHelmchen84/schema-form-currency
```


**Be sure to load this projects files after you load angular schema form**

Example

```HTML
<script type="text/javascript" src="/bower_components/angular/angular.min.js"></script>
<script src="bower_components/angular-sanitize/angular-sanitize.min.js"></script>
<script src='bower_components/angular-translate/angular-translate.min.js'></script>
<script src="bower_components/tv4/tv4.js"></script>
<script src="bower_components/objectpath/lib/ObjectPath.js"></script>
<script src="bower_components/angular-schema-form/dist/schema-form.min.js"></script>
<script src="bower_components/angular-schema-form/dist/bootstrap-decorator.min.js"></script>
<script src="schema-form-currency.js"></script>
```

When you create your module, be sure to depend on this project's module as well.

```javascript
angular.module('yourModule', ['schemaForm', 'pascalprecht.translate', 'schemaForm-currency']);
```

Usage
-----
The add-on adds three new form type, `currency`, and three new default
mappings.

| Schema             |   Default Form type  |
|:-------------------|:------------:|
| "type": "number" and "format": "currency"   |   currency   |


Validation
----------
Use multipleOf to validate steps. e.g. `multipleOf: 0.5` validates number of 12.5 or 13, not 12.1
[http://json-schema.org/latest/json-schema-validation.html#anchor14]

Options
-------
```javascript
{
  key: 'price',
  options: {
    unit: '$',
    uiClass: 'short'
  }
}
```
