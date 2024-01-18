function Storage(initialItems) {
    // Ініціалізація властивості items з переданого масиву
    this.items = Array.isArray(initialItems) ? initialItems : [];

    // Метод для отримання масиву товарів
    this.getItems = function () {
        return this.items;
    };

    // Метод для додавання нового товару
    this.addItems = function (item) {
        this.items.push(item);
    };

    // Метод для видалення товару
    this.removeItem = function (item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
}

// Приклад використання
const initialArray = ["apple", "banana", "mango"];
const storage = new Storage(initialArray);

console.log("Initial items:", storage.getItems());

// Додаємо новий товар
storage.addItems("orange");
console.log("Items after adding:", storage.getItems());

// Видаляємо товар
storage.removeItem("banana");
console.log("Items after removing:", storage.getItems());
