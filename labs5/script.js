// Очікування завершення завантаження DOM перед початком виконання скрипта
document.addEventListener('DOMContentLoaded', function () {
    // Вибір усіх елементів, які мають викликати відображення підказок
    const tooltipTriggerElements = document.querySelectorAll('.tooltip-trigger');
    
    // Вибір основного контейнера для підказок та його текстового вмісту
    const tooltip = document.getElementById('tooltip');
    const tooltipText = document.getElementById('tooltipText');

    // Додавання обробників подій для кожного елемента, що має викликати відображення підказки
    tooltipTriggerElements.forEach(function (element) {
        element.addEventListener('mouseover', function () {
            // Отримання текстового вмісту підказки та виклик функції для її відображення
            const tooltipContent = element.getAttribute('data-tooltip');
            showTooltip(tooltipContent, element);
        });

        element.addEventListener('mouseout', function () {
            // Виклик функції для приховання підказки при виході миші з елемента
            hideTooltip();
        });
    });

    // Функція для відображення підказки
    function showTooltip(text, element) {
        // Отримання координат елемента та встановлення їх для відображення підказки
        const rect = element.getBoundingClientRect();
        tooltipText.textContent = text;
        tooltip.style.top = rect.bottom + 'px';
        tooltip.style.left = rect.left + 'px';
        tooltip.style.display = 'block';
    }

    // Функція для приховання підказки
    function hideTooltip() {
        // Приховання контейнера підказки
        tooltip.style.display = 'none';
    }
});
