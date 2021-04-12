const then = require('./handlers')

/**
 * All the steps definition calculator check
 *
 * @module Then
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
    * ### Then the result should be equal to {int}
    * Ensure the result from the calculation is equal to the expected result
    *
    * @category Result
    *
    * @example
    * Then the result should be equal to 5
    *
    * @example <caption>Placeholder from datasets</caption>
    * Then the result should be equal to {{ custom-variable }}
    *
    * @function checkResult
    */
  ['the result should be equal to {int}', then.checkResult, 'Check the result from the calculator', 'calculator, result'],

  /**
    * ### Then I get {int}
    * Ensure the result from the calculation is equal to the expected result
    *
    * @category Result
    *
    * @example
    * Then I get 5
    *
    * @example <caption>Placeholder from datasets</caption>
    * Then I get {{ custom-variable }}
    *
    * @function checkResult
    */
  ['I get {int}', then.checkResult, 'Check the result from the calculator', 'calculator, result'],

  /**
    * ### Then {int}
    * Ensure the result from the calculation is equal to the expected result
    *
    * @category Result
    *
    * @example
    * Then 5
    *
    * @example <caption>Placeholder from datasets</caption>
    * Then {{ custom-variable }}
    *
    * @function checkResult
    */
  ['{int}', then.checkResult, 'Check the result from the calculator', 'calculator, result']
]
