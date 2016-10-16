import 'babel-polyfill';
import classSyntax from './core/class_syntax';
import iterators from './core/iterators';
import generator from './core/generator';
import symbols from './core/symbols';
import enhancedObjectLiterals from './core/enhanced_object_literals';
import destructuringAssignment from './core/destructuring_assignment';
import asyncFunctions from './core/async_functions';
import proxies from './core/proxies';
import refrect from './core/reflect';
import './library/set';
import './library/map';
import './library/weak_set';
import './library/weak_map';
import './library/string_api';
import './library/array_api';
import './library/number_api';
import './core/exponentiation'; // ES2016

async function main() {
  await classSyntax();
  await iterators();
  await generator();
  await symbols();
  await enhancedObjectLiterals();
  await destructuringAssignment();
  await asyncFunctions();
  await proxies();
  await refrect();
}

main();
