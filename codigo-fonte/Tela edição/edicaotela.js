// Botão editar imagem
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
  }
}

// Botão salvar alterações
function clicou() {
  var nomedoproduto = document.querySelector('#nomedoproduto').value;
  var descricao = document.querySelector('#descricao').value;
  var preco = document.getElementById('preco').value;


  var imageData = localStorage.getItem('imageData');

 

  localStorage.setItem('preco', preco);
  localStorage.setItem('nomedoproduto', nomedoproduto);
  localStorage.setItem('descricao', descricao);
}


window.onload = function () {
  document.getElementById('preco').value = localStorage.getItem('preco');
  document.getElementById('nomedoproduto').value = localStorage.getItem('nomedoproduto');
  document.getElementById('descricao').value = localStorage.getItem('descricao');

//mostra image no local storage
  var imageData = localStorage.getItem('imageData');
  if (imageData) {
      var imagemContainer = document.getElementById('areaimagem');
      var imagem = document.createElement('img');
      imagem.src = 'data:image/png;base64,' + imageData; // Assuming it's a PNG image
      imagemContainer.innerHTML = '';
      imagemContainer.appendChild(imagem);
  }
};

// Botão excluir item
function deleteItem() {
  // Clear local storage LIMPA
  localStorage.clear();

  // Reset os campos
  document.getElementById('preco').value = '';
  document.getElementById('nomedoproduto').value = '';
  document.getElementById('descricao').value = '';
  document.getElementById('areaimagem').innerHTML = ''; // Climpa o container

  location.reload
  location.href = '/codigo-fonte/menu/menu.html'

}

 