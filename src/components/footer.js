// footer.js
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
  