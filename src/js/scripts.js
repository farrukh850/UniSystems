document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    });
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle-mobile');
    
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        // Toggle arrow rotation
        const icon = this.querySelector('svg');
        icon.classList.toggle('rotate-90');
        
        // Toggle dropdown content
        const dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle('hidden');
        
        // Close other open dropdowns
        document.querySelectorAll('.dropdown-content-mobile').forEach(content => {
          if (content !== dropdownContent && !content.classList.contains('hidden')) {
            content.classList.add('hidden');
            content.previousElementSibling.querySelector('svg').classList.remove('rotate-90');
          }
        });
      });
    });
  });