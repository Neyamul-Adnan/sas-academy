AOS.init({ duration: 800, once: true });

// টিচার প্রোফাইল ওপেন ফাংশন
// আপনার আগের function-টা সরিয়ে এটা বসান
function openProfile(name, edu, subject, picUrl) {
    const modal = document.getElementById('profileModal');
    const content = document.getElementById('modalContent');
    
    // modalContent এর ভেতর ছবির জায়গা তৈরি করা হলো
    content.innerHTML = `
        <div class="relative w-24 h-24 mx-auto mb-6">
            <div class="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] rounded-full blur-xl opacity-20"></div>
            <img src="${picUrl}" alt="${name}" class="relative w-24 h-24 object-cover rounded-full border-2 border-white/10 shadow-xl mx-auto">
        </div>
        
        <h2 class="text-2xl font-bold font-['Space_Grotesk'] mb-2 text-white">${name}</h2>
        <p class="text-[#06B6D4] font-medium mb-4">${subject}</p>
        <div class="text-left space-y-3 border-t border-white/10 pt-4 max-w-sm mx-auto">
            <p class="text-sm text-gray-400"><span class="text-white font-semibold">Educational Qualification:</span> ${edu}</p>
            <p class="text-sm text-gray-400"><span class="text-white font-semibold">Experience:</span> 5+ Years</p>
        </div>
        <button onclick="closeProfile()" class="mt-8 w-full bg-[#7C3AED] py-3 rounded-xl font-bold text-white hover:bg-[#7C3AED]/90 transition-colors">Close</button>
    `;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeProfile() {
    const modal = document.getElementById('profileModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Modal এর বাইরে ক্লিক করলে বন্ধ হবে
window.onclick = function(event) {
    const modal = document.getElementById('profileModal');
    if (event.target == modal) {
        closeProfile();
    }
}