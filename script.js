document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerElements = document.querySelectorAll('.tooltip-trigger');
    const tooltip = document.getElementById('tooltip');
    const tooltipText = document.getElementById('tooltipText');

    tooltipTriggerElements.forEach(function (element) {
        element.addEventListener('mouseover', function () {
            const tooltipContent = element.getAttribute('data-tooltip');
            showTooltip(tooltipContent, element);
        });

        element.addEventListener('mouseout', function () {
            hideTooltip();
        });
    });

    function showTooltip(text, element) {
        const rect = element.getBoundingClientRect();
        tooltipText.textContent = text;
        tooltip.style.top = rect.bottom + 'px';
        tooltip.style.left = rect.left + 'px';
        tooltip.style.display = 'block';
    }

    function hideTooltip() {
        tooltip.style.display = 'none';
    }
});
