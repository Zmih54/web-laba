// Підключення модулю для зчитування з консолі
const readline = require('readline');

// Створення інтерфейсу для зчитування з консолі та виводу в консоль
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функція для генерації масиву випадкових чисел заданої довжини
function generateRandomArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}

// Функція для переміщення мінімального елемента на початок масиву
function moveMinToFront(array) {
    // Знаходження індексу мінімального елемента та його значення
    const minIndex = array.indexOf(Math.min.apply(null, array));
    const minValue = array[minIndex];

    // Переміщення мінімального елемента на початок масиву
    for (let i = minIndex; i > 0; i--) {
        array[i] = array[i - 1];
    }

    array[0] = minValue;
}

// Функція для сортування масиву методом вибору
function selectionSort(array) {
    const n = array.length;

    // Зовнішній цикл для пройдення по всім елементам масиву
    for (let i = 0; i < n - 1; i++) {
        let maxIndex = i;

        // Внутрішній цикл для знаходження найбільшого елемента в залишковій частині масиву
        for (let j = i + 1; j < n; j++) {
            if (array[j] > array[maxIndex]) {
                maxIndex = j;
            }
        }

        // Обмін значень поточного елемента з найбільшим знайденим
        const temp = array[i];
        array[i] = array[maxIndex];
        array[maxIndex] = temp;
    }
}

// Основна функція, яка викликається при запуску програми
function main() {
    // Запит користувача про введення кількості елементів масиву
    rl.question('Введіть кількість елементів масиву: ', function(length) {
        // Генерація випадкового масиву та виведення його в консоль
        const randomArray = generateRandomArray(parseInt(length));
        console.log('Випадковий масив:', randomArray);

        // Виклик функції для переміщення мінімального елемента на початок масиву
        moveMinToFront(randomArray);
        console.log('Масив після переміщення мінімального елемента на початок:', randomArray);

        // Виклик функції для сортування масиву у порядку зменшення
        selectionSort(randomArray);
        console.log('Відсортований масив у порядку зменшення:', randomArray);

        // Закриття інтерфейсу зчитування з консолі
        rl.close();
    });
}

// Виклик основної функції для початку виконання програми
main();
