const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


function decode(expr) {
    let result = [];
    for (let i = 0; i < expr.length;) {
        const letter = String(expr).substring(i, i + 10);
        let chars = [];
        for (let j = 0; j < letter.length; j++) {
            if (letter[j] === '1') {
                if (letter[j + 1] === '1') {
                    chars.push('-')
                } else if (letter[j + 1] === '0') {
                    chars.push('.')
                }
                j++
            } else if (letter === '**********') {
                chars.push(' ')
                break;
            }

        }
        result.push(chars.join(''))
        i += 10;
    }
    return result.map(element => {
        if (element === ' ') return ' '
        return MORSE_TABLE[element]
    }).join('');
};

module.exports = {
    decode
}