let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

 // Adicionar classe 'active' ao item de navegação quando a seção é visível
 document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('.itens-cardapio');
    var navItems = document.querySelectorAll('.navbar-nav .nav-item');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function setActiveNavItem() {
        sections.forEach(function (section, index) {
            if (isInViewport(section)) {
                navItems.forEach(function (navItem) {
                    navItem.classList.remove('active');
                });

                navItems[index].classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNavItem);
});