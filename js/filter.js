// === PORTFOLIO FILTERS ===
const filterButtons = document.querySelectorAll('.portfolio__filters-btn');
const portfolioItems = document.querySelectorAll('.portfolio__item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        portfolioItems.forEach(item => {
            const category = item.dataset.category;
            if (filter === 'all' || category === filter) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
