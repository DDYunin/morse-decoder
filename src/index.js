const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // Первый шаг - создать из строки массив строк, длина каждой = 10
    let letterCounter = 0;
    const exprArray = [];
    let encodedSymbol = '';
    // Для правильной работы моего цикла
    const modernizeExpr = expr += '4';
    modernizeExpr.split('').forEach(letter => {
        if (letterCounter === 10) {
            exprArray.push(encodedSymbol);
            encodedSymbol = '';
            letterCounter = 0;
        }
        encodedSymbol += letter;
        letterCounter++;
    });
    // Второй шаг - преобразовать строку, состоящую из 0 и 1 в символ азбуки морзе
    const morseExprArray = exprArray.map(encodedExpr => {
        let chunk = '';
        let counter = 0;
        let message = '';
        for (let i = 0; i <= encodedExpr.length; i++) {
            if (counter === 2) {
                if (chunk === '10') {
                    message += '.';
                }
                if (chunk === '11') {
                    message += '-';
                }
                chunk = '';
                counter = 0;
            }
            chunk += encodedExpr[i];
            counter++;
        }
        return message;
    });
    // Третий шаг преобразуем в буквы и склеиваем
    return morseExprArray.map(morseLetter => {
        if (morseLetter === '') {
            return ' ';
        }
        return MORSE_TABLE[morseLetter];
    }).join('');
}

module.exports = {
    decode
}