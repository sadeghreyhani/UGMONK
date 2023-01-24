// const searchOpen = Document.getElementByClassName("js-search-open");
// const search = Document.getElementByClassName("js-search");
// const searchClose = Document.getElementByClassName("js-search-close");

document.querySelector('.js-search-open').addEventListener('click', function() {
    document.querySelector('.c-search').style.display = "block";
    document.querySelector('.c-search').style.animation = "menuAnimation 1s";
  });
  document.querySelector('.js-search-close').addEventListener('click', function() {
    document.querySelector('.c-search').style.display = "none";
    document.querySelector('.c-search').style.animation = "menuAnimationClose 1s";
  });

  // menu
  // Get all parent menu items
var parentItems = document.querySelectorAll('.c-header__items__item');

// Iterate over parent menu items
parentItems.forEach(function(item) {
    // Add hover event listener to parent menu item
    item.addEventListener('mouseover', function() {
        // Get submenu of current parent menu item
        var submenu = this.querySelector('.c-header__submenu');
        var plus = document.querySelector('.plus');
        plus.classList.add('hide-before');
        // Show submenu
        submenu.style.display = 'block';
    });
    item.addEventListener('mouseout', function() {
        // Get submenu of current parent menu item
        var submenu = this.querySelector('.c-header__submenu');
        var plus = document.querySelector('.plus');
        // Remove the class that hides the plus::before pseudo-element
        plus.classList.remove('hide-before');
        // Hide submenu
        submenu.style.display = 'none';
    });
});
