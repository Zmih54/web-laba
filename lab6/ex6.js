// Масив об'єктів, які представляють твіти з різними характеристиками
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Об'єкт, який використовується для збереження кількості тегів
const tagCount = {};

// Цикл для проходження крізь всі твіти
for (let i = 0; i < tweets.length; i++) {
    // Отримання поточного твіту
    const tweet = tweets[i];
    // Отримання масиву тегів для поточного твіту
    const tags = tweet.tags;

    // Цикл для проходження крізь всі теги поточного твіту
    for (let j = 0; j < tags.length; j++) {
        // Отримання поточного тегу
        const tag = tags[j];
        // Інкрементування лічильника для поточного тегу у збереженому об'єкті tagCount
        tagCount[tag] = (tagCount[tag] || 0) + 1;
    }
}

// Виведення зібраної інформації про кількість тегів у консоль
console.log(tagCount);
