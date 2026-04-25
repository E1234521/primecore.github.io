// Updated navbar.js
document.addEventListener("DOMContentLoaded", function() {
    const navbarHTML = `
    <nav class="bg-charcoal text-white p-4 sticky top-0 z-50 shadow-lg">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-2xl font-black tracking-tighter text-hot-pink uppercase">STYLED BY NAYAH</h1>
            <ul class="flex space-x-8 font-medium items-center">
                <li><a href="index.html" class="hover:text-soft-pink transition">Home</a></li>
                <li><a href="services.html" class="hover:text-soft-pink transition">Services</a></li>
                <li><a href="#book" class="bg-hot-pink px-6 py-2 rounded-full hover:bg-soft-pink transition font-bold">Book Now</a></li>
            </ul>
        </div>
    </nav>
    `;

    const placeholder = document.getElementById('navbar-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navbarHTML;
    } else {
        console.error("Could not find the 'navbar-placeholder' ID on this page.");
    }
});