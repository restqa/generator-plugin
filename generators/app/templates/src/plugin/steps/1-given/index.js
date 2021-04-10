const given = require('./handlers')

/**
 * All the steps related to the Caculator definition
 *
 * @module Given
*/

module.exports = [

  /**
   *  Format:
   *  ['Step definition', function handler, 'description','Tags']
   *
   *  Example:
   *  ['I do {int} + {int}', add, 'Calculate an addition', 'add, calculator, additional']
   *
   */

  /**
    * ### Given I have my calculator
    * Initialize the calculator
    *
    * @category Calculator
    *
    * @example
    * Given I have my calculator
    *
    *
    * @function calculator
    */
  ['I have my calculator', given.calculator, 'Create a new calculator instance', 'calculator']
]
