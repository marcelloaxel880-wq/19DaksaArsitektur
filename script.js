// Auto-hide greeting
if (document.getElementById('greeting')) {
    setTimeout(() => {
        document.getElementById('greeting').classList.add('hidden');
    }, 2000);
}

// Add visible class on load with delay for slide-in
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('visible');
        }, index * 200); // Staggered animation
    });
});