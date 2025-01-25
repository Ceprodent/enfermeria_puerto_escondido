document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const toggleMenuButton = document.querySelector('.toggle-menu');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const dropdownContents = document.querySelectorAll('.dropdown-content');

    function showTab(tabId) {
        tabContents.forEach(tab => tab.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const tabId = this.getAttribute('data-tab');
            if (tabId) {
                showTab(tabId);
            }
            // Cerrar los desplegables al hacer clic en un enlace
            dropdownContents.forEach(dropdown => dropdown.style.display = 'none');

        });
    });

     // Manejo de los dropdowns
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function(event){
       event.preventDefault();
        const dropdown = this.nextElementSibling;
        if(dropdown.style.display === 'block'){
          dropdown.style.display = 'none';
        } else {
         // Cerrar otros dropdowns
          dropdownContents.forEach(dropdown => dropdown.style.display = 'none');
         dropdown.style.display = 'block'
        }

      });
    });

      // Cerrar los dropdowns si se hace click fuera de ellos
      document.addEventListener('click', function (event) {
          if (!event.target.closest('.dropdown')) {
           dropdownContents.forEach(dropdown => dropdown.style.display = 'none')
          }
     });


    toggleMenuButton.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        content.classList.toggle('collapsed');
    });
    
    
    // Inicialmente mostrar la pestaña "hogar"
    showTab('hogar');
});
