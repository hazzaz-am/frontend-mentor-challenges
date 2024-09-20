const hamburger = document.getElementById('header__hamburger')
const header = document.getElementById('header')

// Add Open Class For Menu
function openMenu () {
  header.classList.toggle('open')
}


// Event Listener
hamburger.addEventListener('click', openMenu)