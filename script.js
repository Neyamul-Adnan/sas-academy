// স্ক্রল করার সময় ন্যাভবার অ্যানিমেশন বা অন্যান্য ডাইনামিক কাজের জন্য
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links li a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('লিঙ্কে ক্লিক করা হয়েছে');
        });
    });
});