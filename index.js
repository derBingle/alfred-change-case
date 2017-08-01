const kebab = require('lodash/kebabCase');
const camel = require('lodash/camelCase');
const lower = require('lodash/lowerCase');
const snake = require('lodash/snakeCase');
const upper = require('lodash/upperCase');
const title = require('titlecase');

const targetCase = process.env.case;
const text = process.env.text;

switch (targetCase) {
  case 'kebab':
    process.stdout.write(kebab(text));
  break;

  case 'camel':
    process.stdout.write(camel(text));
  break;

  case 'snake':
    process.stdout.write(snake(text));
  break;

  case 'upper':
    process.stdout.write(upper(text));
  break;

  case 'lower':
    process.stdout.write(lower(text));
  break;

  case 'title':
    let normalized = lower(text)
    process.stdout.write(title(normalized));
  break;
}
