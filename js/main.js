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
    }

    // Exploding Burger Scroll Animation
    const scrollSection = document.getElementById('scrollAnimationSection');
    if (scrollSection) {
        const title = document.getElementById('animationTitle');
        const bunTop = document.getElementById('anim-bun-top');
        const tomato = document.getElementById('anim-tomato');
        const lettuce = document.getElementById('anim-lettuce');
        const cheese = document.getElementById('anim-cheese');
        const patty = document.getElementById('anim-patty');
        const bunBottom = document.getElementById('anim-bun-bottom');
        const plate = document.getElementById('anim-plate');

        window.addEventListener('scroll', () => {
            const rect = scrollSection.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;

            let progress = 0;
            if (sectionTop <= 0) {
                 progress = Math.abs(sectionTop) / (sectionHeight - windowHeight);
            }
            
            // Clamp progress between 0 and 1
            progress = Math.max(0, Math.min(1, progress));

            // Apply physics based on progress
            if (progress > 0) {
                title.style.opacity = Math.max(0, 1 - (progress * 4)); 
                
                // Distribute ingredients off screen
                bunTop.style.transform = `translate(${progress * 300}px, -${progress * 600}px) rotate(${progress * 180}deg)`;
                tomato.style.transform = `translate(-${progress * 400}px, -${progress * 400}px) rotate(-${progress * 220}deg)`;
                lettuce.style.transform = `translate(-${progress * 500}px, -${progress * 100}px) rotate(${progress * 90}deg)`;
                cheese.style.transform = `translate(${progress * 450}px, ${progress * 150}px) rotate(-${progress * 130}deg)`;
                patty.style.transform = `translate(-${progress * 300}px, ${progress * 400}px) rotate(${progress * 170}deg)`;
                bunBottom.style.transform = `translate(${progress * 600}px, ${progress * 50}px) rotate(-${progress * 110}deg)`;
                
                plate.style.transform = `translateY(${progress * 150}px)`;
                plate.style.opacity = Math.max(0, 1 - (progress * 2));
            } else {
                // Reset perfectly
                title.style.opacity = 1;
                [bunTop, tomato, lettuce, cheese, patty, bunBottom, plate].forEach(item => {
                    if(item) {
                        item.style.transform = 'translate(0, 0) rotate(0deg)';
                        item.style.opacity = 1; /* Reset plat opacity too implicitly later */
                    }
                });
            }
        });
    }
});
