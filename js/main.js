document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            if (navMenu.classList.contains('active')) {
                menuToggle.textContent = '✕';
            } else {
                menuToggle.textContent = '☰';
            }
        });
    }

    // Category filtering on Reviews page
    const filterPills = document.querySelectorAll('.pill[data-filter]');
    const reviewCards = document.querySelectorAll('.card[data-category]');

    if (filterPills.length > 0 && reviewCards.length > 0) {
        // Check URL params for category
        const urlParams = new URLSearchParams(window.location.search);
        const cat = urlParams.get('cat');
        
        if (cat) {
            filterCards(cat);
        }

        filterPills.forEach(pill => {
            pill.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = pill.getAttribute('data-filter');
                filterCards(filter);
                
                // Update active state
                filterPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');

                // Update URL without reload
                const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?cat=' + filter;
                window.history.pushState({path:newurl}, '', newurl);
            });
        });
    }

    function filterCards(filter) {
        // Update active pill
        const activePill = document.querySelector(`.pill[data-filter="${filter}"]`);
        if (activePill) {
            document.querySelectorAll('.pill[data-filter]').forEach(p => p.classList.remove('active'));
            activePill.classList.add('active');
        }

        reviewCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
