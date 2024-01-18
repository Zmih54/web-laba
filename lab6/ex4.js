// Визначення конструктора для об'єкта Storage
function Storage(initialItems) {
    // Ініціалізація властивості items початковим масивом або порожнім масивом за замовчуванням
    this.items = initialItems || [];

    // Метод для отримання елементів зі сховища
    this.getItems = function () {
        return this.items;
    };

    // Метод для додавання нового елемента до сховища
    this.addItems = function (item) {
        this.items.push(item);
    };

    // Метод для видалення елемента зі сховища
    this.removeItem = function (item) {
        // Знаходження індексу елемента та видалення його, якщи він існує
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
}

// Початковий масив для ініціалізації об'єкта Storage
const initialArray = ["apple", "banana", "mango"];

// Створення об'єкта Storage з використанням конструктора
const storage = new Storage(initialArray);

// Виведення початкового стану елементів сховища в консоль
console.log("Initial items:", storage.getItems());

// Додавання нового елемента до сховища та виведення оновленого стану в консоль
storage.addItems("orange");
console.log("Items after adding:", storage.getItems());

// Видалення елемента зі сховища та виведення оновленого стану в консоль
storage.removeItem("banana");
console.log("Items after removing:", storage.getItems());
