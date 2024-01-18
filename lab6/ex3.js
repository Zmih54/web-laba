const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

function applyDiscount(medicines) {
    const discountedMedicines = medicines.map((medicine) => {
        // Перевірка, чи потрібно застосовувати знижку
        if (medicine.price > 300) {
            // Розрахунок нової ціни зі знижкою на 30%
            const discountedPrice = 0.7 * medicine.price;
            // Повертаємо новий об'єкт з новою ціною та ідентифікатором
            return { ...medicine, price: discountedPrice };
        }
        // Якщо ціна не перевищує 300 грн, повертаємо оригінальний об'єкт
        return medicine;
    });

    return discountedMedicines;
}

// Виклик функції та виведення результату у консоль
const result = applyDiscount(medicines);
console.log(result);
