const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { +repeatTimes: 3, +separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, +additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let additionSeparator = '|';
    let defaultSeparator = '+';
    let addition;

    //addition repeat
    if (options.addition !== undefined) {
        if (typeof options.addition === 'boolean') { addition = options.addition.toString(); } else {
            addition = options.addition;
        }
        if (options.additionSeparator) { additionSeparator = `${options.additionSeparator}` }

        addition += additionSeparator;
        if (options.additionRepeatTimes) {
            addition = addition.repeat(options.additionRepeatTimes);
        }
        addition = addition.slice(0, -`${additionSeparator.length}`);
        str += addition;
        console.log(addition);
    }

    //string repeat
    if (options.separator) { defaultSeparator = `${options.separator}`; }
    str += defaultSeparator;
    if (options.repeatTimes) {
        str = str.repeat(options.repeatTimes);
    }
    str = str.slice(0, -`${defaultSeparator.length}`);


    return str;

}

module.exports = {
    repeater
};