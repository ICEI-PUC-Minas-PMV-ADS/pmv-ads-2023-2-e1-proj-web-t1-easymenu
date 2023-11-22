const menuData = {
    hamburguer: [
      {
        name: "Hamburguer Simples",
        image: "../imagens/hamb1.png",
        description: "Pão da sua escolha, hamburguers de 180g de carne bovina, salada e queijo da sua escolha.",
        price: "R$35,00",
      },

      {
        name: "Cheesebacon",
        image: "../imagens/hamb2.jpg",
        description: "Pão da sua escolha, hamburguers de 180g de carne bovina, bacon e queijo da sua escolha.",
        price: "R$35,00"
      },

      {
        name: "Cheesebacon",
        image: "../imagens/hamb3.jpg",
        description: "Pão da sua escolha, 2 hamburguers de 180g de carne bovina e duas fatias de cheddar.",
        price: "R$35,00"
      },

    ],

    entradas: [
      {
        name: "Batata Frita",
        image: "../imagens/batatafrita.jpg",
        description: "330g de batata frita.",
        price: "R$20,00"
      },
      // Add more items as needed
    ],

    sobremesas: [
      {
        name: "Cheesecake",
        image: "../imagens/istockphoto-179640507-612x612.jpg",
        description: "Cheesecake com calda de sua preferência.",
        price: "R$15,00"
      },
      // Add more items as needed
    ],

    bebidas: [
      {
        name: "Coca Cola",
        image: "../imagens/1984-refrigerante-coca-cola-lata-350ml.jpg",
        description: "Refrigerante em lata",
        price: "R$5,00"
      },
      // Add more items as needed
    ],
  };

  function createMenu(category) {
    const menuContainer = document.getElementById(category);
    const items = menuData[category];
  
    items.forEach(item => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("hamb-item");
  
      menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="info">
          <h3><b>${item.name}</b></h3>
          <h4>${item.description} <span>${item.price}</span></h4>
          <button class="alterar" onclick="alterarItem('${item.name}')">Alterar</button>
        </div>
      `;
  
      menuContainer.appendChild(menuItem);
    });
  }
  
  function alterarItem(itemName) {
    // Implement your logic to handle item alteration
    console.log(`Item ${itemName} altered`);
  }
  
  // Call the function for each menu category
  createMenu("hamburguer");
  createMenu("entradas");
  createMenu("sobremesas");
  createMenu("bebidas");

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

function logout() {
    // Lógica para realizar logout, como limpar o token de autenticação, etc.
    alert("Você foi desconectado!");
    // Redirecionar para a página de login, se necessário
    window.location.href = "/codigo-fonte/login/login.html";
};

