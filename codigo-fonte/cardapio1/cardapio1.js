const menuData = {
    hamburguer: [
      {
        id: "1",
        name: "Hamburguer Simples",
        image: "../imagens/hamb1.png",
        description: "Pão da sua escolha, hamburguers de 180g de carne bovina, salada e queijo da sua escolha.",
        price: "R$35,00",
      },
  
      {
        id: "2",
        name: "Cheesebacon",
        image: "../imagens/hamb2.jpg",
        description: "Pão da sua escolha, hamburguers de 180g de carne bovina, bacon e queijo da sua escolha.",
        price: "R$35,00"
      },
  
      {
        id: "3",
        name: "Cheesebacon",
        image: "../imagens/hamb3.jpg",
        description: "Pão da sua escolha, 2 hamburguers de 180g de carne bovina e duas fatias de cheddar.",
        price: "R$35,00"
      },
  
    ],
  
    entradas: [
      {
        id: "4",
        name: "Batata Frita",
        image: "../imagens/batatafrita.jpg",
        description: "330g de batata frita.",
        price: "R$20,00"
      },
      // Add more items as needed
    ],
  
    sobremesas: [
      {
        id: "5",
        name: "Cheesecake",
        image: "../imagens/istockphoto-179640507-612x612.jpg",
        description: "Cheesecake com calda de sua preferência.",
        price: "R$15,00"
      },
      // Add more items as needed
    ],
  
    bebidas: [
      {
        id: "6",
        name: "Coca Cola",
        image: "../imagens/1984-refrigerante-coca-cola-lata-350ml.jpg",
        description: "Refrigerante em lata",
        price: "R$5,00"
      },
      // Add more items as needed
    ],
  };
  
  const categorias = {
    categorias: [
      {
        id: "hamburguer",
        name: "Hamburguer",
      },
      {
        id: "entradas",
         name: "Entradas", 
       },
      {
       id: "sobremesas",
        name: "Sobremesas", 
      },
      {
        id: "bebidas",
         name: "Bebidas", 
       },
    ],
  };
  
  function createMenu() {
    var cardapios = localStorage.getItem("cardapios"); 
    if (cardapios != null) {
      cardapios = JSON.parse(cardapios);
    } else {
      cardapios = menuData;    
      localStorage.setItem("cardapios", JSON.stringify(menuData));
    }
    
    const categorias = ["hamburguer", "entradas", "sobremesas", "bebidas"];
    
    categorias.forEach(category => {
      const menuContainer = document.getElementById(category);
      const items = cardapios[category];
  
      items.forEach(item => {
        const itemId = document.getElementById(item.id);
        if (itemId != null) {
          itemId.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="info">
            <h5>Código: <b>${item.id}</b></h5>  
            <h3><b>${item.name}</b></h3>
              <h4>${item.description} <span>${item.price}</span></h4>
              <button class="alterar" data-bs-toggle="modal" data-bs-target="#editModal" onclick="openAlterarModal('${item.id}', '${item.name}', '${item.description}', '${item.price}')">Alterar</button>
              `;
  
        } else {
          const menuItem = document.createElement("div");
          menuItem.classList.add("hamb-item");
          menuItem.id = item.id;
  
          menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="info">
            <h5>Código: <b>${item.id}</b></h5>  
            <h3><b>${item.name}</b></h3>
              <h4>${item.description} <span>${item.price}</span></h4>
              <button class="alterar" data-bs-toggle="modal" data-bs-target="#editModal" onclick="openAlterarModal('${item.id}', '${item.name}', '${item.description}', '${item.price}')">Ver</button>
              `;
  
          menuContainer.appendChild(menuItem);
        }
        
      });
    });
  }
  
  // Call the function for each menu category
  createMenu();
  
  function openAlterarModal(id, name, description, price) {
    const modalId = document.getElementById('modalId');
    const modalTitle = document.getElementById('modalTitle');
    const modalName = document.getElementById('modalName');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
  
    modalTitle.innerText = name;
    modalName.value = name;
    modalDescription.value = description;
    modalPrice.value = price;
    modalId.value = id;
  }
  
    
  
  function closeModalEdit() {
    $('#editModal').modal('hide');
  }
  
  
  
  
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
  
 