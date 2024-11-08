// navbar.js
export function loadNavbar() {
    const navbar = `
      <nav class="bg-blue-500 p-4 text-white">
        <div class="container mx-auto">
          <h1 class="text-2xl font-bold">My Project Navbar</h1>
          <ul class="flex space-x-4">
            <li><a href="#" class="hover:text-gray-200">Home</a></li>
            <li><a href="#" class="hover:text-gray-200">About</a></li>
            <li><a href="#" class="hover:text-gray-200">Services</a></li>
            <li><a href="#" class="hover:text-gray-200">Contact</a></li>
          </ul>
        </div>
      </nav>
    `;
    document.getElementById('navbar').innerHTML = navbar;
  }
  