document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, loading components inline');

    // Inline functions for testing
    function loadNavbar() {
        const navbar = `
        <nav class="bg-blue-500 p-4 text-white">
    <div class="container mx-auto flex justify-between items-center">
        <!-- Logo Section -->
        <div>
            <img src="../../public/assets/Deelly Logo.png" alt="Logo" class="h-8 w-8" />
        </div>

        <!-- Dropdown and Search Bar Section -->
        <div class="flex items-center space-x-4">
            <!-- Dropdown Menu (select one) -->
            <div>
                <select class="rounded-full w-[160px] h-[40px] bg-white text-gray-800 px-4">
                    <option>Select one</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>

            <!-- Search Bar -->
            <div class="relative">
                <input type="text" placeholder="Search..." class="rounded-full w-[200px] h-[40px] pl-10 pr-4 text-gray-800" />
                <i class="fa fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" aria-hidden="true"></i>
            </div>
        </div>

        <!-- Sign Up and Icons Section -->
        <div class="flex items-center space-x-4">
            <!-- Sign Up Button -->
            <button class="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center">
                <i class="fa fa-user-plus text-white mr-2" aria-hidden="true"></i>
                Sign Up
            </button>

            <!-- Cart Icon -->
            <div class="rounded-full p-2 hover:bg-gray-700">
                <i class="fa fa-cart-plus text-white" aria-hidden="true"></i>
            </div>

            <!-- User Icon -->
            <div class="rounded-full p-2 hover:bg-gray-700">
                <i class="fa fa-user text-white" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</nav>

      `;
        document.getElementById('navbar').innerHTML = navbar;
    }

    function loadFooter() {
        const footer = `
      <footer class="bg-gray-800 p-4 text-white mt-8">
        <div class="container mx-auto text-center">
          <p>&copy; 2024 My Project</p>
        </div>
      </footer>
    `;
        document.getElementById('footer').innerHTML = footer;
    }

    // Load Navbar and Footer inline for testing
     function changeLanguage(language) {
        // Update the displayed language in the footer
        document.getElementById('selectedLanguage').innerText = `Selected Language: ${language}`;
    }

    loadNavbar();
    loadFooter();
});
