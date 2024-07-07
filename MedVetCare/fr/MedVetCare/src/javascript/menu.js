const menuButton = document.getElementById('menu-button');
const dropdownMenu = document.getElementById('dropdown-menu');


menuButton.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'block'? 'none' : 'block';
  
});