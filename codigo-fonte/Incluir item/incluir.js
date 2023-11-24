document.addEventListener("DOMContentLoaded", function () {
  // Carregar dados do JSON
  fetch('incluir.json')
      .then(response => response.json())
      .then(data => exibirItens(data))
      .catch(error => console.error('Erro ao carregar dados:', error));
});

function exibirItens(itens) {
  // Aqui você pode manipular os dados e exibi-los na sua página
  console.log(itens);

  // Exemplo de como você pode percorrer os itens
  itens.forEach(item => {
      console.log(item.nome);
      // Faça o que precisar com cada item, como adicioná-los à sua página HTML
  });
}

function exibirImagem() {
  var input = document.getElementById('arquivo');
  var imagemContainer = document.getElementById('areaimagem');

  if (input.files && input.files[0]) {
      var leitor = new FileReader();

      leitor.onload = function (e) {
          var imagem = document.createElement('img');
          imagem.src = e.target.result;

          imagemContainer.innerHTML = '';
          imagemContainer.appendChild(imagem);

          //salva no localstorage
          localStorage.setItem('imageData', e.target.result);
      };

      leitor.readAsDataURL(input.files[0]);
  }
}

// Botão salvar alterações
function clicou() {
  var nomedoproduto = document.querySelector('.nomedoproduto').value;
  var descricao = document.querySelector('.descricao').value;
  var preco = document.querySelector('.preco').value;

  var imageData = localStorage.getItem('imageData');

  localStorage.setItem('preco', preco);
  localStorage.setItem('nomedoproduto', nomedoproduto);
  localStorage.setItem('descricao', descricao);
  localStorage.setItem('imageData', imageData);
}

window.onload = function () {
  document.querySelector('.preco').value = localStorage.getItem('preco');
  document.querySelector('.nomedoproduto').value = localStorage.getItem('nomedoproduto');
  document.querySelector('.descricao').value = localStorage.getItem('descricao');

  // mostra imagem no local storage
  var imageData = localStorage.getItem('imageData');
  if (imageData) {
      var imagemContainer = document.getElementById('areaimagem');
      var imagem = document.createElement('img');
      imagem.src = imageData;
      imagemContainer.innerHTML = '';
      imagemContainer.appendChild(imagem);
  }
};
document.addEventListener("DOMContentLoaded", function () {
  // Carregar dados do JSON
  fetch('incluir.json')
      .then(response => response.json())
      .then(data => exibirItens(data))
      .catch(error => console.error('Erro ao carregar dados:', error));
});

function exibirItens(itens) {
  // Aqui você pode manipular os dados e exibi-los na sua página
  console.log(itens);

  // Exemplo de como você pode percorrer os itens
  itens.forEach(item => {
      console.log(item.nome);
      // Faça o que precisar com cada item, como adicioná-los à sua página HTML
  });
}

function exibirImagem() {
  var input = document.getElementById('arquivo');
  var imagemContainer = document.getElementById('areaimagem');

  if (input.files && input.files[0]) {
      var leitor = new FileReader();

      leitor.onload = function (e) {
          var imagem = document.createElement('img');
          imagem.src = e.target.result;

          imagemContainer.innerHTML = '';
          imagemContainer.appendChild(imagem);

          // salva no localstorage
          localStorage.setItem('imageData', e.target.result);
      };

      leitor.readAsDataURL(input.files[0]);
  }
}

// Botão salvar alterações
function clicou() {
  var nomedoproduto = document.querySelector('.nomedoproduto').value;
  var descricao = document.querySelector('.descricao').value;
  var preco = document.querySelector('.preco').value;
  var categoria = document.querySelector('.selecionar select').value; // Obtém a categoria selecionada

  if (categoria === 'Categoria') {
      alert('Por favor, selecione a categoria antes de incluir no cardápio.');
      return;
  }

  var imageData = localStorage.getItem('imageData');

  localStorage.setItem('preco', preco);
  localStorage.setItem('nomedoproduto', nomedoproduto);
  localStorage.setItem('descricao', descricao);
  localStorage.setItem('categoria', categoria);
  localStorage.setItem('imageData', imageData);

  // Redireciona para a tela do cardápio
  window.location.href = './cardapio/cardapio.html';
}

window.onload = function () {
  document.querySelector('.preco').value = localStorage.getItem('preco');
  document.querySelector('.nomedoproduto').value = localStorage.getItem('nomedoproduto');
  document.querySelector('.descricao').value = localStorage.getItem('descricao');

  // mostra imagem no local storage
  var imageData = localStorage.getItem('imageData');
  if (imageData) {
      var imagemContainer = document.getElementById('areaimagem');
      var imagem = document.createElement('img');
      imagem.src = imageData;
      imagemContainer.innerHTML = '';
      imagemContainer.appendChild(imagem);
  }
};
