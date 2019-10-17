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

// Initialization encrypted symbols

const symbols = {
    '00': '',
    '10': '.',
    '11': '-',
    '**': ' '
}

function decode(expr) {
    
    // Initialization decoded string, letter and symbol
    let decodeStr = '';
    let letter = '';
    let symbol = '';

    // Find symbols, letters and decode string

    for (let i = 0; i < expr.length; i++) {
        symbol += expr[i];                      // add expr[i] to symbol variable

        if ((i + 1) % 2 === 0) {
        
            letter += symbols[symbol];          // add letter from symbols 
            symbol = '';                        // nullifying symbol value for next iteration
        }

        if ((i + 1) % 10 === 0) {               // decoding string
            if (letter.indexOf(' ') !== -1) {   // finding letter spacing
            decodeStr += ' ';
        } else {
             decodeStr += MORSE_TABLE[letter]; // add letter to decoded string
        }
        
        letter = '';   // nullifying letter value for next iteration
    }
}

    return decodeStr;
    
};

module.exports = {
    decode
}