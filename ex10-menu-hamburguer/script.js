// pego o icone e a lista pelo id
var menuIcon = document.getElementById('menu-icon');
var navList = document.getElementById('nav-list');

// quando clicar no icone, abre ou fecha o menu
menuIcon.addEventListener('click', function() {
  navList.classList.toggle('active');
});

// fecha o menu ao clicar em qualquer link
var links = document.querySelectorAll('.nav-list a');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    navList.classList.remove('active');
  });
}

// fecha o menu ao rolar a pagina
window.addEventListener('scroll', function() {
  navList.classList.remove('active');
});
