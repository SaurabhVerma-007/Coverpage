// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});

// Download Resume Function
function downloadResume() {
    // Replace this URL with your actual resume file path
    const resumeUrl = 'https://drive.google.com/file/d/1MmrhW8Xfdy9kSGs99mnyNebb2_2yCTvx/view?usp=drive_link';
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
