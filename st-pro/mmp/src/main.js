import { generatePassword } from './password.js';
import {card1} from './encoder.js';
const genPass = document.getElementById('generatePassword');

genPass.addEventListener('click', () => {
    const length = document.getElementById('passwordLength').value;
    const includeUpper = document.getElementById('includeUppercase').checked;
    const includeLower = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSpecial = document.getElementById('includeSpecial').checked;

    const password = generatePassword(length, includeUpper, includeLower, includeNumbers, includeSpecial);
    document.getElementById('generatedPassword').value = password;
});

const copyBtn = document.querySelector('#generatedPassword + button');
copyBtn.addEventListener('click', () => {
    const passwordField = document.getElementById('generatedPassword');
    if (passwordField.value && passwordField.value !== ' ') {
        navigator.clipboard.writeText(passwordField.value).then(() => {
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = 'Copy';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
});

const passwordLengthInput = document.getElementById('passwordLength');
const passwordLengthValue = document.getElementById('passwordLengthValue');

passwordLengthInput.addEventListener('input', () => {
    passwordLengthValue.textContent = passwordLengthInput.value;
});


const inputText = document.getElementById('inputText');
const encodeBtn = document.getElementById('encodeBtn');
const decodeBtn = document.getElementById('decodeBtn');
const copyResultBtn = document.getElementById('copyBtn');
const resultField = document.getElementById('result');


encodeBtn.addEventListener('click', () => {
    const input = inputText.value;
    const encoded = card1(input);
    resultField.textContent = encoded;
});

decodeBtn.addEventListener('click', () => {
    const input = inputText.value;
    const decoded = card1(input);
    resultField.textContent = decoded;
});

copyResultBtn.addEventListener('click', () => {
    if (resultField.textContent && resultField.textContent !== 'Your result will appear here') {
        navigator.clipboard.writeText(resultField.textContent).then(() => {
            copyResultBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyResultBtn.textContent = 'Copy Result';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
}); 


