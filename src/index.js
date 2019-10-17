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


    for (let i = 0; i < expr.length; i++) {
        symbol += expr[i]; 

        if ((i + 1) % 2 === 0) {
            
            letter += symbols[symbol]; 
            symbol = '';               
        }

        if ((i + 1) % 10 === 0) {               
            if (letter.indexOf(' ') !== -1) {   
                decodeStr += ' ';
            } else {
                 decodeStr += MORSE_TABLE[letter]; 
            }
            
            letter = '';   
        }
    }

    return decodeStr;
    
};

module.exports = {
    decode
}