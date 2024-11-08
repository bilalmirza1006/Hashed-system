// UI Components loading
console.log('uiComponents.js loaded');
export function loadNavbar() {
  const navbar = `
    <nav class="bg-blue-500 p-4 text-white">
      <div class="container mx-auto">
        <h1 class="text-2xl font-bold">My Project Navbar</h1>
      </div>
    </nav>
  `;
  document.getElementById('navbar').innerHTML = navbar;
}

export function loadFooter() {
  const footer = `
    <footer class="bg-gray-800 p-4 text-white mt-8">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 My Project</p>
      </div>
    </footer>
  `;
  document.getElementById('footer').innerHTML = footer;
}
