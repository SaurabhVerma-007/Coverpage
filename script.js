// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Download Resume Function
function downloadResume() {
    // Replace this URL with your actual resume file path
    const resumeUrl = 'https://drive.google.com/file/d/1vivUGDYMOrmRtPJScCtVDDqxl3kzyrBR/view?usp=sharing';
    window.open(resumeUrl, '_blank');
}

// Smooth scroll for any internal links (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add print functionality (optional)
function printPage() {
    window.print();
}
