const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(isDirect) {
        this.isDirect = isDirect;
    }
    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error("Incorrect arguments!")
        }
        for (let i = 0; key.length < message.length; i++) {
            key += message[i];
        }
        console.log(key)
        message = message.replace(/([A-Z])/gi, this.replacer);
        console.log(message);
    }

    replacer(match) {
        let alphabet = this.formAlphabet();
        alphabet.forEeach((item) => {
            if (match.toUpperCase() === item[0]) { return item[1] }
        })
    }
    formAlphabet() {
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let lettersNums = Array.from(alphabet);
        lettersNums = lettersNums.map((el, index) => [el, index + 1]);
        return lettersNums;
    }












    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined || key === undefined) {
            throw new Error("Incorrect arguments!")
        }
    }
    strToUpperCase(str) {
        return str.strToUpperCase();
    }
}

module.exports = {
    VigenereCipheringMachine
};
// const directMachine = new VigenereCipheringMachine();
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
// console.log(directMachine.formAlphabet());

let message1 = 'hello my darling love!'
let key = 'alphonse';
for (let i = 0; key.length < message1.length; i++) {
    key += key[i];
}
console.log(key);

message1 = message1.replace(/([A-Z])/gi, replacer);

// slovo eto slovo


function replacer(match) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lettersNums = Array.from(alphabet);
    lettersNums = lettersNums.map((el, index) => [el, index + 1]);

    for (let i = 0; i < lettersNums.length; i++) {
        if (match.toUpperCase() === lettersNums[i][0]) { return `${lettersNums[i][1]},` }
    }
}
message1 = message1.split(',');
console.log(message1);