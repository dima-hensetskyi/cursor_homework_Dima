function getMaxDigit(...number) {
    const string = String(number).split("");
    let newString = "";
    for (let letter of string) {
        if (Number(letter)) {
            newString += Number(letter);
        }
    }
    return Math.max(...newString);
}

function getPow(number, pow) {
    let powNumber = 1;
    let result = number;
    if (pow > 0) {
        for (let i = 1; i < pow; i++) {
            result *= number;
        }
    } else if (pow < 0) {
        for (let i = 0; i < Math.abs(pow); i++) {
            result = powNumber /= number;
        }
    } else {
        result = powNumber;
    }
    return result;
}

const getCorrectName = name => {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

function getSumAfterTax(sum, tax = 19.5) {
    if (isNaN(tax)) {
        getSumAfterTax(sum, tax = prompt("Ви ввели некоректний відсоток податку. Введіть відсоток числом без знаку %"));
        if (!tax) {
            console.log("Ви ввели некоректний відсоток податку");
        };
    };
    return +(sum - (sum * (tax / 100))).toFixed(2);
}

const getRandomNumber = (min, max) => {
    return Math.floor((Math.random() * (max - min) + min));
}

function getLetterRepeat(letter, word) {
    word = word.toLowerCase();
    let counter = 0;
    for (let repeatLetter of word) {
        if (repeatLetter == letter) {
            counter++;
        }
    }
    return counter;
}

function convertCurrency(currency) {
    const sellDollarCurrency = 28.35;
    const buyDollarCurrency = 28.15;
    const checkCurrency = () => {
        if (typeof (currency) !== "string") {
            currency = prompt("Введіть, будь ласка, суму для обміну з знаком валюти $ або UAH");
        }
        currency = currency.toUpperCase();
        do {
            while (currency.includes("-")) {
                currency = prompt("Ви ввели негативне значення. Введіть, будь ласка, суму для обміну з знаком валюти $ або UAH");
            }
            while (!currency.toUpperCase().includes("UAH") && !currency.includes("$")) {
                currency = prompt("Введіть, будь ласка, суму для обміну з знаком валюти $ або UAH");
            }
        } while (currency.includes("-") || !currency)
        return currency;
    }
    currency = checkCurrency();
    let sum = 0;

    if (currency.includes("$")) {
        sum = +currency.split("$")[0] * sellDollarCurrency;
    } else if (currency.includes("UAH")) {
        sum = +currency.split("UAH")[0] * buyDollarCurrency;
    }
    return sum;
}

function getRandomPaswword(length = 8) {
    let password = [];
    password.length = length;
    const randomNumber = () => Math.floor(Math.random() * 10)
    for (let i = 0; i < length; i++) {
        password[i] = randomNumber();
    }
    return +password.join("");
}

function deleateLetters(letter, string) {
    let newString = "";
    for (let goodLetter of string) {
        if (goodLetter.toLowerCase() !== letter) {
            newString += goodLetter;
        }
    }
    return newString;
}

function isPalidrom(string) {
    let goodString = string;
    goodString = deleateLetters(goodString, " ").toLowerCase();
    const reverse = (goodString) => goodString.split("").reverse().join("");
    const reverseString = reverse(goodString);
    return (reverseString === goodString);
}

function deleteDuplicateLetter(string) {
    let newString = "";
    string = string.toLowerCase();

    for (let i = 0; i < string.length; i++) {
        let repeat = 0;
        for (let j = 0; j < string.length; j++) {
            if (string[i] == string[j]) {
                repeat++;
                if (repeat > 1) {
                    break;
                }
            }
        }
        if (repeat <= 1) {
            newString += string[i];
        }

    }
    return newString;
}

console.log(`Функція №1: getMaxDigit(6, 987). Результат: ${getMaxDigit(6, 987)}`);
console.log(`Функція №2: getPow(5, 2). Результат: ${getPow(5, 2)}`);
console.log(`Функція №3: getCorrectName("гАНдРіЙ"). Результат: ${getCorrectName("гАНдРіЙ")}`);
console.log(`Функція №4: getSumAfterTax(1000). Результат: ${getSumAfterTax(1000)}`);
console.log(`Функція №5: getRandomNumber(1, 10). Результат: ${getRandomNumber(1, 10)}`);
console.log(`Функція №6: getLetterRepeat("a", "Ha-ha. Many letters AaAa."). Результат: ${getLetterRepeat("a", "Ha-ha. Many letters AaAa.")}`);
console.log(`Функція №7: convertCurrency(100$). Результат: ${convertCurrency("100$")}`);
console.log(`Функція №8: getRandomPaswword(). Результат: ${getRandomPaswword()}`);
console.log(`Функція №9: deleateLetters("a", "blablabla"). Результат: ${deleateLetters("a", "blablabla")}`);
console.log(`Функція №10: isPalidrom("Я несу гусеня"). Результат: ${isPalidrom("Я несу гусеня")}`);
console.log(`Функція №11: deleteDuplicateLetter("Who deleted all the repetitive letters?").
Результат: ${deleteDuplicateLetter("Who deleted all the repetitive letters?")}`);