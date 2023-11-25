
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

          // Salvar a imagem no localStorage
          var blob = dataURItoBlob(leitor.result);
          var url = URL.createObjectURL(blob);
          localStorage.setItem('imageURL', url);
      };

      function dataURItoBlob(dataURI) {
          var byteString = atob(dataURI.split(',')[1]);
          var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
          var ab = new ArrayBuffer(byteString.length);
          var ia = new Uint8Array(ab);
          for (var i = 0; i < byteString.length; i++) {
              ia[i] = byteString.charCodeAt(i);
          }
          return new Blob([ab], { type: mimeString });
      }

      leitor.readAsDataURL(input.files[0]);
  }
}

// Botão salvar alterações
function clicou() {
  var nomedoproduto = document.querySelector('#nomedoproduto').value;
  var descricao = document.querySelector('#descricao').value;
  var preco = document.getElementById('preco').value;

  // Salvar os dados no localStorage
  localStorage.setItem('preco', preco);
  localStorage.setItem('nomedoproduto', nomedoproduto);
  localStorage.setItem('descricao', descricao);

  // Recuperar a imagem do localStorage e exibir novamente
  var imageURL = localStorage.getItem('imageURL');
  if (imageURL) {
      var imagemContainer = document.getElementById('areaimagem');
      var imagem = document.createElement('img');
      imagem.src = imageURL;
      imagemContainer.innerHTML = '';
      imagemContainer.appendChild(imagem);
  }
}

window.onload = function () {
  // Preencher os campos com os dados do localStorage ao carregar a página
  document.getElementById('preco').value = localStorage.getItem('preco');
  document.getElementById('nomedoproduto').value = localStorage.getItem('nomedoproduto');
  document.getElementById('descricao').value = localStorage.getItem('descricao');

  // Exibir a imagem do localStorage
  var imageURL = localStorage.getItem('imageURL');
  if (imageURL) {
      var imagemContainer = document.getElementById('areaimagem');
      var imagem = document.createElement('img');
      imagem.src = imageURL;
      imagemContainer.innerHTML = '';
      imagemContainer.appendChild(imagem);
  }
};

// Botão excluir item
function deleteItem() {
  // Limpar o localStorage
  localStorage.clear();

  // Resetar os campos e a imagem
  document.getElementById('preco').value = '';
  document.getElementById('nomedoproduto').value = '';
  document.getElementById('descricao').value = '';
  document.getElementById('areaimagem').innerHTML = ''; // Limpar o container
}

 