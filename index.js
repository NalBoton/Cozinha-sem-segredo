const searchItems = document.getElementById('search-bar')
const aside = document.getElementById('aside')
const card = document.querySelectorAll('.card')
const searchButton = document.getElementById('search-button')

// search visibility

const menu = document.getElementById('menu')
const loginItems = document.querySelector('.perfil-items')

document.addEventListener('DOMContentLoaded', function() {
  if(window.innerWidth <= 700){
    searchItems.classList.add('hidden')
    searchButton.classList.remove('hidden')
  }
}); 

function ToggleVisibility(){

  aside.classList.toggle('hidden')

  card.forEach(x => x.classList.toggle('minicard'));
}

function ToggleSearchVisibility(){

  menu.classList.toggle('hidden')
  loginItems.classList.toggle('hidden')
  searchItems.classList.toggle('hidden')
  document.getElementById('search-button').classList.toggle('hidden')

  document.getElementById('search-input').focus()

  document.getElementById('back').classList.toggle('hidden')

}

function ToggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
