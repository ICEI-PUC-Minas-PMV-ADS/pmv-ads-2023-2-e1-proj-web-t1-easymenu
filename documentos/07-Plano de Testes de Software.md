# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
    <li>RF-01:	A aplicação deverá permitir a visualização do menu pelo cliente.</li>
   <li>RF-02:	No acesso do administrador deverá ter a possibilidade de o mesmo editar, acrescentar e excluir a qualquer momento que desejar, produtos no menu.</li>
   <li>RF-03:	A aplicação deve permitir o cadastro, login e logout no sistema pelo administrador.</li>
    <li>RF-05:	A aplicação deve permitir a visualização de cada produto.</li>
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Taylsson</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o login de usuários</td>
  <td>
   <ul>
   <li>RF-03: A aplicação dever permitir o cadastro, o login e o logout no sistema pelo administrador.</li>
   </ul>
  </td>
  <td>Verificar se o login está sendo feito corretamente. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Entrar”, no menu.</li>
    <li>Preencher seus dados e clicar em “Entrar”.</li>
   </ol>
   </td>
  <td>Após o login, o usuário deverá ser redirecionado para a sua página de perfil.</td>
  <td>Fernanda</td>
 </tr>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
 <tr>
  <td>CT-03: Verificar detalhes dos produtos</td>
  <td>
   <ul>
    <li>RF-01:	A aplicação deverá permitir a visualização do menu pelo cliente.</li>
    <li>RF-05:	A aplicação deve permitir a visualização de cada produto.</li>
   </ul>
  </td>
  <td>Verificar se todas as informações referentes aos produtos estão disponíveis na página Menu</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Menu.</li>
    <li>Visualizar as informações referentes aos produtos disponíveis na página.</li>
   </ol>
   </td>
  <td>Todas as informações, incluindo imagens dos produtos, estão disponíveis na página Menu.</td>
  <td>João Victor</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-04: Verificar se é possível editar fotos de cada produto disponível no cardápio.</td>
  <td>
   <ul>
    <li>RF-02: No acesso do administrador deverá ter a possibilidade de o mesmo editar, ascrescentar e excluir a qualquer momento que desejar, produtos no menu.</li>
   <li>RF-04:	Aplicação deve permitir que seja possível incorporar imagens aos produtos.</li>
   </ul>
  </td>
  <td>Verificar se a página Edição do produto está apresentando as funcionalidade alterar descrição do produto e alterar as fotos do produtos cadastrados. </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em "Cadastre-se", no Menu.</li>
    <li>Preencher o formulário e clicar em “Cadastrar”.</li>
    <li>Visualizar a página Login.</li>
    <li>Preencher seus dados e clicar em “Entrar”.</li>
    <li>Visualizar a página Perfil do administrador.</li>
   </ol>
   </td>
  <td>As informações registradas pelo usuário no momento do cadastro devem estar disponibilizadas na página Perfil.</td>
  <td>Naiana</td>
 </tr>
</table>


