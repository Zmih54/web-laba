const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

// Отримання масиву імен міст
const cityNames = Object.keys(concerts);

// Фільтрація міст, які ще не мали концерту та відсортування за датою
const upcomingCities = cityNames
    .filter(function(city) {
        return concerts[city] > new Date();
    })
    .sort(function(cityA, cityB) {
        return concerts[cityA] - concerts[cityB];
    })
    .map(function(city) {
        return city;
    });

// Виведення результату у консоль
console.log(upcomingCities);
