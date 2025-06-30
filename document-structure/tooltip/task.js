const tooltipLinks = document.querySelectorAll('.has-tooltip');

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

let activeElement = null;

tooltipLinks.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();

        if (activeElement === el) {
            tooltip.classList.remove('tooltip_active');
            activeElement = null;
            return;
        }

        activeElement = el;

        tooltip.textContent = el.title;
        tooltip.classList.add('tooltip_active');

        const coords = el.getBoundingClientRect();

        tooltip.style.left = coords.left + 'px';
        tooltip.style.top = coords.bottom + 'px';
    });
});