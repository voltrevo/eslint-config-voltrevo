'use strict';

module.exports = {
  // http://eslint.org/docs/rules/

  'ecmaFeatures': {
    'binaryLiterals': false,                    // enable binary literals
    'blockBindings': false,                     // enable let and const (aka block bindings)
    'defaultParams': false,                     // enable default function parameters
    'forOf': false,                             // enable for-of loops
    'generators': false,                        // enable generators
    'objectLiteralComputedProperties': false,   // enable computed object literal property names
    'objectLiteralDuplicateProperties': false,  // enable duplicate object literal properties in strict mode
    'objectLiteralShorthandMethods': false,     // enable object literal shorthand methods
    'objectLiteralShorthandProperties': false,  // enable object literal shorthand properties
    'octalLiterals': false,                     // enable octal literals
    'regexUFlag': false,                        // enable the regular expression u flag
    'regexYFlag': false,                        // enable the regular expression y flag
    'templateStrings': false,                   // enable template strings
    'unicodeCodePointEscapes': false,           // enable code point escapes
    'jsx': false                                // enable JSX
  },

  'env': {
    // MODIFIED
    'browser': true,     // browser global variables.
    'node': true,        // Node.js global variables and Node.js-specific rules.
    // END MODIFIED

    'amd': false,         // defines require() and define() as global variables as per the amd spec.
    'mocha': false,       // adds all of the Mocha testing global variables.
    'jasmine': false,     // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
    'phantomjs': false,   // phantomjs global variables.
    'jquery': false,      // jquery global variables.
    'prototypejs': false, // prototypejs global variables.
    'shelljs': false      // shelljs global variables.
  },

  'globals': {
    // e.g. 'angular': true
  },

  'plugins': [
    'require-path-exists',
    'filesize'
  ],

  'rules': {
    'filesize/filesize': [2, {'limit': 1024}],

    // opentok/javascript: Proposed additions: Errors
    'strict': [2, 'global'],          // controls location of Use Strict Directives
    // until we make a version for babel, which will do it for us

    // no-shadow: => 2
    // 'comma-dangle': [2, 'always-multiline'],    // http://eslint.org/docs/rules/comma-dangle

    'no-debugger': 1,                // http://eslint.org/docs/rules/no-debugger
    'no-console': 1,                 // http://eslint.org/docs/rules/no-console
    'no-alert': 1,                   // http://eslint.org/docs/rules/no-alert
    'no-constant-condition': 0,      // http://eslint.org/docs/rules/no-constant-condition
    'no-dupe-keys': 2,               // http://eslint.org/docs/rules/no-dupe-keys
    'no-duplicate-case': 2,          // http://eslint.org/docs/rules/no-duplicate-case
    'no-empty': 2,                   // http://eslint.org/docs/rules/no-empty
    'no-ex-assign': 2,               // http://eslint.org/docs/rules/no-ex-assign
    'no-extra-semi': 2,              // http://eslint.org/docs/rules/no-extra-semi
    'no-func-assign': 2,             // http://eslint.org/docs/rules/no-func-assign
    'no-invalid-regexp': 2,          // http://eslint.org/docs/rules/no-invalid-regexp
    'no-irregular-whitespace': 2,    // http://eslint.org/docs/rules/no-irregular-whitespace
    'no-obj-calls': 2,               // http://eslint.org/docs/rules/no-obj-calls
    'no-sparse-arrays': 2,           // http://eslint.org/docs/rules/no-sparse-arrays
    'no-unreachable': 2,             // http://eslint.org/docs/rules/no-unreachable
    'use-isnan': 2,                  // http://eslint.org/docs/rules/use-isnan
    'block-scoped-var': 2,           // http://eslint.org/docs/rules/block-scoped-var
    'no-negated-in-lhs': 2,          // disallow negation of the left operand of an in expression
    'no-regex-spaces': 2,         // disallow multiple spaces in a regular expression literal
    'valid-jsdoc': 2,             // Ensure JSDoc comments are valid (off by default)
    'valid-typeof': 2,            // Ensure that the results of typeof are compared against a valid string

    // opentok/javascript: Proposed additions: Best Practices
    'consistent-return': 2,          // http://eslint.org/docs/rules/consistent-return
    'default-case': 2,               // http://eslint.org/docs/rules/default-case
    'guard-for-in': 2,               // http://eslint.org/docs/rules/guard-for-in
    'no-caller': 2,                  // http://eslint.org/docs/rules/no-caller
    'no-else-return': 2,             // http://eslint.org/docs/rules/no-else-return
    'no-eq-null': 2,                 // disallow comparisons to null without a type-checking operator (off by default)
    'no-eval': 2,                    // http://eslint.org/docs/rules/no-eval
    'no-extend-native': 2,           // http://eslint.org/docs/rules/no-extend-native
    'no-extra-bind': 2,              // http://eslint.org/docs/rules/no-extra-bind
    'no-fallthrough': 2,             // http://eslint.org/docs/rules/no-fallthrough
    'no-floating-decimal': 2,        // http://eslint.org/docs/rules/no-floating-decimal
    'no-implied-eval': 2,            // http://eslint.org/docs/rules/no-implied-eval
    'no-lone-blocks': 2,             // http://eslint.org/docs/rules/no-lone-blocks
    'no-loop-func': 2,               // http://eslint.org/docs/rules/no-loop-func
    'no-multi-str': 2,               // http://eslint.org/docs/rules/no-multi-str
    'no-native-reassign': 2,         // http://eslint.org/docs/rules/no-native-reassign
    'no-new': 2,                     // http://eslint.org/docs/rules/no-new
    'no-new-func': 2,                // http://eslint.org/docs/rules/no-new-func
    'no-octal': 2,                   // http://eslint.org/docs/rules/no-octal
    'no-octal-escape': 2,            // http://eslint.org/docs/rules/no-octal-escape
    'no-param-reassign': 2,          // http://eslint.org/docs/rules/no-param-reassign
    'no-redeclare': 2,               // http://eslint.org/docs/rules/no-redeclare
    'no-return-assign': 2,           // http://eslint.org/docs/rules/no-return-assign
    'no-script-url': 2,              // http://eslint.org/docs/rules/no-script-url
    'no-self-compare': 2,            // http://eslint.org/docs/rules/no-self-compare
    'no-sequences': 2,               // http://eslint.org/docs/rules/no-sequences
    'no-throw-literal': 2,           // http://eslint.org/docs/rules/no-throw-literal
    'no-with': 2,                    // http://eslint.org/docs/rules/no-with
    'vars-on-top': 0,                // http://eslint.org/docs/rules/vars-on-top
    'wrap-iife': [2, 'any'],         // http://eslint.org/docs/rules/wrap-iife
    'yoda': [2, "never", { "exceptRange": true }], // http://eslint.org/docs/rules/yoda
    'no-iterator': 2,                // disallow usage of __iterator__ property
    'no-unused-expressions': 2,      // disallow usage of expressions in statement position
    'no-void': 2,                    // disallow use of void operator (off by default)
    'no-warning-comments': 0,        // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
    'no-delete-var': 2,               // disallow deletion of variables
    'no-undef-init': 0,               // disallow use of undefined when initializing variables
    'no-undefined': 0,                // disallow use of undefined variable (off by default)
    'handle-callback-err': [2, '^(err|error)$' ],
    'no-new-require': 2,              // disallow use of new operator with the require function (off by default) (on by default in the node environment)
    'no-path-concat': 2,              // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
    'no-process-exit': 1,             // disallow process.exit() (on by default in the node environment)
    'func-style': [2, 'expression'],  // [1, 'expression'] enforces use of function declarations or expressions (off by default)

    'key-spacing': [2, {             // http://eslint.org/docs/rules/key-spacing
        'beforeColon': false,
        'afterColon': true
    }],

    'no-lonely-if': 2,              // disallow if as the only statement in an else block (off by default)
    'no-mixed-spaces-and-tabs': 2,  // disallow mixed spaces and tabs for indentation
    'no-nested-ternary': 0,          // http://eslint.org/docs/rules/no-nested-ternary
    'operator-assignment': [2, 'always'], // require assignment operator shorthand where possible or prohibit it entirely (off by default)
    'padded-blocks': 0,             // [2, 'always'] or [2, 'never'] enforce padding within blocks (off by default)
    'quote-props': [2, 'as-needed'],  // require quotes around object literal property names (off by default)
    'spaced-comment': [2, 'always'],  // http://eslint.org/docs/rules/spaced-comment
    'no-new-wrappers': 2,       // disallows creating new instances of String, Number, and Boolean
    'no-new-object': 2,             // disallow use of the Object constructor
    'no-array-constructor': 2,      // disallow use of the Array constructor
    'quotes': [2, 'single', 'avoid-escape'], // specify whether double or single quotes should be used
    'no-inner-declarations': 2,   // disallow function or variable declarations in nested blocks
    'no-shadow': 2,                   // disallow declaration of variables already declared in the outer scope
    'no-shadow-restricted-names': 2,  // disallow shadowing of names such as arguments
    'dot-notation': [2, {'allowKeywords': true}],          // encourages use of dot notation whenever possible
    'no-undef': 2,                    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'one-var': [2, 'never'],                   // allow just one var statement per function (off by default)

    'no-unused-vars': [2, {          // http://eslint.org/docs/rules/no-unused-vars
      'vars': 'all',
      'args': 'all',
      'argsIgnorePattern': '^[Ii]gnore'
    }],

    'no-use-before-define': 2,       // http://eslint.org/docs/rules/no-use-before-define
    'no-cond-assign': 2,          // disallow assignment in conditional expressions
    'eqeqeq': 2,                     // require the use of === and !==
    'curly': 2,                 // specify curly brace conventions for all control statements

    'brace-style': [2,               // http://eslint.org/docs/rules/brace-style
      '1tbs', {
      'allowSingleLine': true
    }],

    'indent': [2, 2, {'VariableDeclarator': 2, 'SwitchCase': 1}], // http://eslint.org/docs/rules/indent
    'no-spaced-func': 2,                                          // disallow space between function identifier and application
    'no-trailing-spaces': 2,
    'space-before-function-paren': [2, 'never'],
    'space-after-keywords': 2,
    'space-before-blocks': 2,                                     // require or disallow space before blocks (off by default)
    'object-curly-spacing': [2, 'never'],
    'array-bracket-spacing': [2, 'never'],                        // requires eslint v1.0.0
    'space-in-parens': [2, 'never'],                              // require or disallow spaces inside parentheses (off by default)
    'space-infix-ops': 2,                                         // require spaces around operators
    'space-return-throw-case': 2,                                 // require a space after return, throw, and case
    'space-unary-ops': 2,                                         // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    'eol-last': 2,                                                // enforce newline at the end of file, with no multiple empty lines
    'comma-spacing': [2, {                                        // http://eslint.org/docs/rules/comma-spacing
      'before': false,
      'after': true
    }],

    'semi-spacing': [2, {                                         // http://eslint.org/docs/rules/semi-spacing
      'before': false,
      'after': true
    }],

    'comma-dangle': [2, 'never'],         // disallow trailing commas in object literals
    'comma-style': [2, 'last'],      // http://eslint.org/docs/rules/comma-style

    'semi': [2, 'always'],           // http://eslint.org/docs/rules/semi

    'radix': 2,                      // http://eslint.org/docs/rules/radix

    'camelcase': [2, {               // http://eslint.org/docs/rules/camelcase
      'properties': 'never'
    }],

    'new-cap': 0,                   // http://eslint.org/docs/rules/new-cap
    'new-parens': 2,                // disallow the omission of parentheses when invoking a constructor with no arguments
    'no-underscore-dangle': 0,       // http://eslint.org/docs/rules/no-underscore-dangle
    'consistent-this': [2, 'self'],           // enforces consistent naming when capturing the current execution context (off by default)
    'func-names': 0,                 // http://eslint.org/docs/rules/func-names
    'no-proto': 2,                   // http://eslint.org/docs/rules/no-proto

    // END MODIFIED

    ////////// Possible Errors //////////

    'no-control-regex': 0,        // disallow control characters in regular expressions
    'no-empty-class': 0,          // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 0, // replaces no-empty-class
    'no-extra-boolean-cast': 0,   // disallow double-negation boolean casts in a boolean context
    'no-extra-parens': 0,         // disallow unnecessary parentheses (off by default)

    ////////// Best Practices //////////

    'complexity': 0,            // specify the maximum cyclomatic complexity allowed in a program (off by default)
    'no-div-regex': 0,          // disallow division operators explicitly at beginning of regular expression (off by default)
    'no-empty-label': 0,        // disallow use of labels for anything other then loops and switches
    'no-labels': 0,             // disallow use of labeled statements
    'no-multi-spaces': 0,       // disallow use of multiple spaces
    'no-process-env': 0,        // disallow use of process.env (off by default)

    ////////// Strict Mode //////////

    'global-strict': 0,   // (deprecated) require or disallow the 'use strict' pragma in the global scope (off by default in the node environment)
    'no-extra-strict': 0, // (deprecated) disallow unnecessary use of 'use strict'; when already in strict mode

    ////////// Variables //////////

    'no-catch-shadow': 0,             // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    'no-label-var': 2,                // disallow labels that share a name with a variable

    ////////// Node.js //////////

    'no-mixed-requires': 0,     // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
    'no-restricted-modules': 0, // restrict usage of specified node modules (off by default)
    'no-sync': 0,               // disallow use of synchronous methods (off by default)

    ////////// Stylistic Issues //////////

    'max-nested-callbacks': 0,      // specify the maximum depth callbacks can be nested (off by default)
    'no-inline-comments': 0,        // disallow comments inline after code (off by default)
    'no-multiple-empty-lines': 0,   // disallow multiple empty lines (off by default)
    'no-ternary': 0,                // disallow the use of ternary operators (off by default)
    'no-wrap-func': 0,              // disallow wrapping of non-IIFE statements in parens
    'sort-vars': 0,                 // sort variables within the same declaration block (off by default)
    'wrap-regex': 0,                // require regex literals to be wrapped in parentheses (off by default)


    ////////// ECMAScript 6 //////////

    'no-var': 0,          // require let or const instead of var (off by default)
    'generator-star': 0,  // enforce the position of the * in generator functions (off by default)


    ////////// Legacy //////////

    'max-depth': 0,       // specify the maximum depth that blocks can be nested (off by default)
    'max-len': 0,         // specify the maximum length of a line in your program (off by default)
    'max-params': 0,      // limits the number of parameters that can be used in the function declaration. (off by default)
    'max-statements': 0,  // specify the maximum number of statement allowed in a function (off by default)
    'no-bitwise': 0,      // disallow use of bitwise operators (off by default)
    'no-plusplus': 0      // disallow use of unary operators, ++ and -- (off by default)
  }
};
