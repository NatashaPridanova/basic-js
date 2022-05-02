const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    let transformedArr = [];
    if (Array.isArray(arr)) {
        let indexToDiscard;
        let indexToDouble;

        arr.forEach((el, index) => {
            if (typeof el == 'string') {
                switch (el) {
                    case '--double-next':
                        {
                            if (index < arr.length - 1) {
                                transformedArr.push(arr[index + 1]);
                                indexToDouble = index;
                            }

                        }
                        break;
                    case '--double-prev':
                        {
                            if (index !== 0 && index !== indexToDiscard + 1) {
                                transformedArr.push(arr[index - 1]);
                            }
                            break;
                        }
                    case '--discard-next':
                        {
                            indexToDiscard = index + 1;
                            break;
                        }
                    case '--discard-prev':
                        {
                            if (index !== 0 && index !== indexToDiscard + 1) {
                                transformedArr.pop();
                            }
                            break;
                        }
                    default:
                        transformedArr.push(el);

                }
            } else {
                if (index !== indexToDiscard) {
                    transformedArr.push(el);
                }
            }
        })
        return (transformedArr);
    } else throw new Error("'arr' parameter must be an instance of the Array!");
}

module.exports = {
    transform
};
transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]);