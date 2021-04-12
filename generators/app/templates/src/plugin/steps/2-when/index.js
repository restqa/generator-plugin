const when = require('./handlers')

/**
 * All the steps related to the calculator trigger
 *
 * @module When
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
    * ### When I use the expression {int} plus {int}
    *
    * Trigger the calculation for an addition
    *
    * @category Addition
    *
    * @example
    * When I use the expression 7 plus 4
    *
    *
    * @function addition
    */
  ['I use the expression {int} plus {int}', when.addition, 'Perform an addition', 'add, calculator additional'],

  /**
    * ### When I do {int} + {int}
    *
    * Trigger the calculation for an addition (explicit version)
    *
    * @category Addition
    *
    * @example
    * When I do 5 + 6
    *
    *
    * @function addition
    */
  ['I do {int} + {int}', when.addition, 'Perform an addition', 'add, calculator additional'],

  /**
    * ### When {int} + {int}
    *
    * Trigger the calculation for an addition (short version)
    *
    * @category Addition
    *
    * @example
    * When 7 + 4
    *
    *
    * @function addition
    */
  ['{int} + {int}', when.addition, 'Perform an addition', 'add, calculator additional']
]
