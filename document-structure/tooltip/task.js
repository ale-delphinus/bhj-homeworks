const tooltipsLinks = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltipCount = 1;

tooltipsLinks.forEach(tooltipLink => {
  tooltipLink.addEventListener('click', (event) => {
    event.preventDefault();

    
    const tooltipContainer = document.createElement('div');
    tooltipContainer.classList.add('tooltip_container');

    
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = tooltipLink.getAttribute('title');
    tooltip.classList.add('tooltip_active');

   
    const tooltipLinkActive = tooltipLink.querySelector('.tooltip_active');
    if(tooltipLinkActive) {
        tooltipLinkActive.remove();
        return;
    }
    
    const openedTooltips = document.querySelectorAll('.tooltip');
        if (openedTooltips.length >= tooltipCount) {
        openedTooltips[0].remove();
    }


    tooltip.style.top = event.target.getBoundingClientRect().top + 20 + 'px';
    tooltip.style.left = event.target.getBoundingClientRect().left + 'px';

    tooltipLink.appendChild(tooltip);
  });
});