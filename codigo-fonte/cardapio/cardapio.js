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
      name: "CheeseBurgerBacon",
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
            <button class="alterar" data-bs-toggle="modal" data-bs-target="#editModal" onclick="openAlterarModal('${item.id}', '${item.name}', '${item.description}', '${item.price}')">Alterar</button>
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

function saveChanges() {
  // Get the updated data from the modal
  const modalId = document.getElementById('modalId').value;
  const updatedName = document.getElementById('modalName').value;
  const updatedDescription = document.getElementById('modalDescription').value;
  const updatedPrice = document.getElementById('modalPrice').value;

  var cardapios = localStorage.getItem("cardapios"); 
  if (cardapios != null) {
    cardapios = JSON.parse(cardapios);
  }
  
  const menu = ["hamburguer", "entradas", "sobremesas", "bebidas"];
  
  menu.forEach(category => {
    const items = cardapios[category];
    items.forEach(item => {
      if(item.id == modalId) {
        item.name = updatedName;
        item.description = updatedDescription;
        item.price = updatedPrice;
      }
    });
  });

  // Save the updated menu data to localStorage
  localStorage.setItem("cardapios", JSON.stringify(cardapios));
  createMenu();
  closeModalEdit();
}

function closeModalEdit() {
  $('#editModal').modal('hide');
}

function deleteItem() {
  // Remove the item from the menu data
  const modalId = document.getElementById('modalId').value;
  var cardapios = localStorage.getItem("cardapios"); 
  if (cardapios != null) {
    cardapios = JSON.parse(cardapios);
  }
  
  const menu = ["hamburguer", "entradas", "sobremesas", "bebidas"];
  
  menu.forEach(category => {
    const itens = cardapios[category];
    const itensFilter = itens.filter(function(i) {return i.id != modalId;});
    cardapios[category] = itensFilter;
  });

  const itemId = document.getElementById(modalId);
  if (itemId != null) {
    itemId.remove();
  }

  // Save the updated menu data to localStorage
  localStorage.setItem("cardapios", JSON.stringify(cardapios));

  // Close the modal
  closeModalEdit();
}

function updateCardInUI(index) {
  // Implement your logic to update the card in the UI
  // This could involve replacing the card content, re-rendering, etc.
  console.log(`Card at index ${index} updated in the UI`);
}

function removeCardFromUI(index) {
  // Implement your logic to remove the card from the UI
  // This could involve removing the corresponding HTML element, re-rendering, etc.
  console.log(`Card at index ${index} removed from the UI`);
}


function alterarItem(itemName) {
  // Implement your logic to handle item alteration
  console.log(`Item ${itemName} altered`);
}

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

function closeModalNovo() {
  $('#novoItemModal').modal('hide');
}

function initDropdown() {
  let dropdown = document.getElementById("dropdown");
  const cat = categorias["categorias"];
  cat.forEach(f => {
    let option = document.createElement("option");
    option.text = f.name;
    option.value = f.id;
    dropdown.add(option);
  });
}

document.getElementById('novoItemForm').addEventListener('submit', function (event) {
  event.preventDefault();
  adicionarNovoItem();
  closeModalNovo();
});

function adicionarNovoItem() {
  const nome = document.getElementById('nome').value;
  const imagem = document.getElementById('imagem').value;
  const descricao = document.getElementById('descricao').value;
  const preco = document.getElementById('preco').value;
  const categoriaSelected = document.querySelector('#dropdown').selectedIndex;
  const categor = categorias["categorias"];
  const categoria = categor[categoriaSelected];

  // Recupera os dados existentes do localStorage
  var cardapios = localStorage.getItem("cardapios"); 
  if (cardapios != null) {
    cardapios = JSON.parse(cardapios);
  }

  const ids = [];
  categor.forEach(cat => {
    cardapios[cat.id].forEach(card => {
      ids.push(Number(card.id));
    })
  });
  const id = ids.reduce((a, b) => Math.max(a, b), -Infinity);
  const newId = + id + 1;

  var dados = {
      id: newId,
      name: nome,
      image: imagem,
      description: descricao,
      price: preco
  };

  cardapios[categoria.id].push(dados);
  
  // Save the updated menu data to localStorage
  localStorage.setItem("cardapios", JSON.stringify(cardapios));

  // Atualiza o cardápio na interface
  createMenu(); // Substitua "hamburguer" pela categoria desejada
}