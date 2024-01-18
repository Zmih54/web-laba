function checkBrackets(str) {
    const stack = [];
    const bracketsMap = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // Якщо символ - відкриваюча дужка, додаємо її в стек
        if (bracketsMap[char]) {
            stack.push(char);
        } else if (Object.values(bracketsMap).includes(char)) {
            // Якщо символ - закриваюча дужка
            const lastOpenedBracket = stack.pop();

            // Перевірка відповідності відкриваючої і закриваючої дужок
            if (bracketsMap[lastOpenedBracket] !== char) {
                return false;
            }
        }
    }

    // Перевірка, чи стек порожній, щоб переконатися, що всі дужки закриті
    return stack.length === 0;
}

// Приклад використання
const codeWithCorrectBrackets = 'function someFn() { console.log("Hello World!"); }';
const codeWithIncorrectBrackets = 'function someFn() { console.log("Hello World!"; }';

console.log(checkBrackets(codeWithCorrectBrackets)); // Повинно бути true
console.log(checkBrackets(codeWithIncorrectBrackets)); // Повинно бути false
