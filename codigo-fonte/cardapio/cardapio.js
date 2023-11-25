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
          <button class="alterar" data-bs-toggle="modal" data-bs-target="#editModal" onclick="openAlterarModal('${item.name}', '${item.description}', '${item.price}')">Alterar</button>
      `;

    menuContainer.appendChild(menuItem);
  });
}

// Add click event listener to all "Alterar" buttons
const alterarButtons = document.querySelectorAll('.alterar');
alterarButtons.forEach(function (button, index) {
  button.addEventListener('click', function () {
    openModalWithData(index);
  });
});
// Function to open the Alterar Modal with item details
function openAlterarModal(name, description, price) {
  const modalTitle = document.getElementById('modalTitle');
  const modalName = document.getElementById('modalName');
  const modalDescription = document.getElementById('modalDescription');
  const modalPrice = document.getElementById('modalPrice');

  modalTitle.innerText = name;
  modalName.value = name;
  modalDescription.value = description;
  modalPrice.value = price;
}


function openModalWithData(index) {
  // Retrieve item data based on the index or ID of the item
  const itemData = getMenuData()[index];
  // Populate the modal with the item data
  document.getElementById('modalTitle').innerText = itemData.name;
  document.getElementById('modalName').value = itemData.name;
  document.getElementById('modalDescription').value = itemData.description;
  document.getElementById('modalPrice').value = itemData.price;

  // Add click event listener to the "Salvar" button in the modal
  document.getElementById('modalSaveButton').addEventListener('click', function () {
    saveChanges(index);
  });

  // Add click event listener to the "Excluir" button in the modal
  document.getElementById('modalDeleteButton').addEventListener('click', function () {
    deleteItem(index);
  });

  // Show the modal
  $('#editModal').modal('show');
}

function saveChanges(index) {
  // Get the updated data from the modal
  const updatedName = document.getElementById('modalName').value;
  const updatedDescription = document.getElementById('modalDescription').value;
  const updatedPrice = document.getElementById('modalPrice').value;

  // Update the item in the menu data
  const menuData = getMenuData();
  menuData[index].name = updatedName;
  menuData[index].description = updatedDescription;
  menuData[index].price = updatedPrice;

  // Save the updated menu data to localStorage
  localStorage.setItem('menuData', JSON.stringify(menuData));

  // Update the card in the UI (replace this with your own logic)
  updateCardInUI(index);

  // Close the modal
  $('#editModal').modal('hide');
}

function deleteItem(index) {
  // Remove the item from the menu data
  const menuData = getMenuData();
  menuData.splice(index, 1);

  // Save the updated menu data to localStorage
  localStorage.setItem('menuData', JSON.stringify(menuData));

  // Remove the card from the UI (replace this with your own logic)
  removeCardFromUI(index);

  // Close the modal
  $('#editModal').modal('hide');
}

function getMenuData() {
  // Retrieve menu data from localStorage
  const storedData = localStorage.getItem('menuData');
  return storedData ? JSON.parse(storedData) : [];
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


document.getElementById('novoItemForm').addEventListener('submit', function (event) {
  event.preventDefault();
  adicionarNovoItem();
  $('#novoItemModal').modal('hide'); // Fecha o modal após adicionar
});

function adicionarNovoItem() {
  const nome = document.getElementById('nome').value;
  const imagem = document.getElementById('imagem').value;
  const descricao = document.getElementById('descricao').value;
  const preco = document.getElementById('preco').value;

  // Recupera os dados existentes do localStorage
  const menuData = getMenuData();

  // Adiciona o novo item
  menuData.push({
    name: nome,
    image: imagem,
    description: descricao,
    price: preco
  });

  // Salva os dados atualizados no localStorage
  localStorage.setItem('menuData', JSON.stringify(menuData));

  // Atualiza o cardápio na interface
  createMenu("hamburguer"); // Substitua "hamburguer" pela categoria desejada
}