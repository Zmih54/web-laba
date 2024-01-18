const productsDatabase = {
    '1': { id: '1', name: 'Товар 1', price: 100 },
    '2': { id: '2', name: 'Товар 2', price: 150 },
};

// Функція отримання деталей товару
function getProductDetails(productId, successCallback, errorCallback) {
    // Симуляція запиту до бази даних
    const product = productsDatabase[productId];

    // Перевірка, чи знайдено товар
    if (product) {
        // Виклик successCallback і передача деталей товару
        successCallback(product);
    } else {
        // Виклик errorCallback і передача повідомлення про помилку
        errorCallback(`Товар з id ${productId} не знайдено.`);
    }
}

// Приклад використання функції
let productId = '1';

// Функція успіху
const successCallback = (product) => {
    console.log(`Деталі товару: ${JSON.stringify(product)}`);
};

// Функція помилки
const errorCallback = (errorMessage) => {
    console.error(`Помилка: ${errorMessage}`);
};

// Виклик функції getProductDetails
getProductDetails(productId, successCallback, errorCallback);
getProductDetails(3, successCallback, errorCallback);

