const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateRandomArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}

function moveMinToFront(array) {
    const minIndex = array.indexOf(Math.min.apply(null, array));
    const minValue = array[minIndex];

    for (let i = minIndex; i > 0; i--) {
        array[i] = array[i - 1];
    }

    array[0] = minValue;
}

function selectionSort(array) {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let maxIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (array[j] > array[maxIndex]) {
                maxIndex = j;
            }
        }

        const temp = array[i];
        array[i] = array[maxIndex];
        array[maxIndex] = temp;
    }
}

function main() {
    rl.question('Введіть кількість елементів масиву: ', function(length) {
        const randomArray = generateRandomArray(parseInt(length));

        console.log('Випадковий масив:', randomArray);

        moveMinToFront(randomArray);
        console.log('Масив після переміщення мінімального елемента на початок:', randomArray);

        selectionSort(randomArray);
        console.log('Відсортований масив у порядку зменшення:', randomArray);

        rl.close();
    });
}

main();
