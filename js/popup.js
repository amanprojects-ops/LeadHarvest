// Maps Scraper — Popup Logic
// Clean, no auth, no limitations

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    // Search Google Maps
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            chrome.tabs.create({
                url: `https://www.google.com/maps/search/${encodeURIComponent(query)}`
            });
        }
    });

    // Enter key support
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });

    // Focus input on load
    searchInput.select();

    // Load stats from storage
    loadStats();
});

function loadStats() {
    chrome.storage.local.get(['leads', 'exportCount'], (data) => {
        const leads = data.leads || [];
        const exports = data.exportCount || 0;

        animateNumber('totalLeads', leads.length);
        animateNumber('totalExports', exports);
    });
}

// Smooth number animation
function animateNumber(elementId, target) {
    const el = document.getElementById(elementId);
    if (!el) return;

    if (target === 0) {
        el.textContent = '0';
        return;
    }

    const duration = 600;
    const start = performance.now();
    const startVal = 0;

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(startVal + (target - startVal) * eased);
        el.textContent = current.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}
