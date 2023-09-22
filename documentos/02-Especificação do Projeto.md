# Especificação do Projeto

## Perfis de Usuários


<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Usuário Final </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px"> Os clientes seriam os usuários finais do sistema, com acesso o cardápio online, onde possibilitaria a visualização dos produtos ofertados e e realização do seu pedido.  </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td> Cardápio digital e intuitivo, produto disponibilizados de modo claro e objetivo, possibilidade de personalização dos itens e realização do pedido de modo online, com agilidade, sem depedência de terceiros. </td>
</tr>
<tr align=center>
<th colspan="2">Perfil Proprietário/Gerente do Estabelecimento </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px"> Os gerentes e proprietários seriam responsáveis por configurar e gerenciar o sistema, adeptos a inovação desejam a disponibilidade de um cardápio que possibilite edição de seus itens de modo prático e a diminuição na dependência de funcionários para funcionamento de seu ambiente.  </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td> Gerenciamento do cardápio, com possibilidade de adicionar, editar ou remover itens do cardápio, definir preços, ajustar opções de personalização e configurar promoções especiais. Envio de pedidos realizados a cozinha. Geração de informações e relatórios de performance do sistema. Cardápio digital com fotos reais dos pratos. </td>
</tr>
<tr align=center>
<th colspan="2">Perfil Equipe de Cozinha </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Os membros da equipe da cozinha precisam receber os pedidos feitos pelos clientes por meio do sistema.  </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td> O sistema deve exibir os detalhes dos pedidos, incluindo as personalizações feitas pelos clientes, para que a equipe possa preparar os pratos de acordo com as especificações. Isso pode incluir informações sobre alergias, preferências de cozimento, entre outros detalhes relevantes.Receber notificações em tempo real quando novos pedidos forem feitos. </td>
</tr>  
</tbody>
</table>


## Histórias de Usuários


|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Cliente            | editar, retirar ou acrescer itens do prato| Adaptar ao meu gosto ou restrição alimentar|
| Cliente            |Um menu de fácil uso, e com objetividade nos pratos ofertados|Ter uma maior facilidade no entendimento dos produtos|
| Cliente            |Visualizar imagens reais dos produtos oferecidos| Para fazer uma escolha mais assertiva e trazer uma ideia mais real do produto|
| Cliente            |Realizar o pedido de modo online| Não depender da disponibilidade de atendente|
| Cliente            |Visualizar os pedidos já realizados| Ter uma ciência do produtos já consumidos e gastos realizados|
| Proprietário       | Um cardápio digital passível de edição dos itens e interativo|Para alterar os produtos e categorias disponíveis|
| Proprietário| Envio dos pedidos de modo online para a cozinha| Não necessitar de um funcionário para anotar os pedidos dos clientes|
| Proprietário| Histórico dos pedidos realizados por cada mesa| Lançamento dos produtos consumidos e cobrança dos clientes|
| Proprietário| Aplicação que esteja online full time| Possibilitação de realizar as atividades do estabelecimento em qualquer horário|
| Proprietário| Sistema que gere relatórios| Identificação dos produtos mais consumidos, desempenho do estabelecimento|
| Equipe de Cozinha| Aplicação que informe os pedidos feitos com informações detalhadas, incluindo personalizações, instruções especiais e alergias|Para produção dos pratos de modo sastifatório para o cliente |
| Equipe de Cozinha| notificações em tempo real dos pedidos realizados|Para produção dos pratos de modo eficiente | 

## Requisitos do Projeto

O propósito do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais



|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |A aplicação deverá possibilitar o acréscimo ou alteração de itens do produto pelo cliente|Alta| 
| RF-02 |No acesso do administrador, deverá ter a possibilidade de o mesmo editar, acrescentar e excluir a qualquer momento que desejar, produtos ou categorias do menu|Alta|
| RF-03 |O site deve exibir uma comanda do que já foi consumido pelo cliente e o valor total dos pedidos|Alta|
| RF-04 | O sistema deve dispor de acessos com permissões diferentes, essas sejam administrador, cozinha e clientes|Alta|
| RF-05 |A aplicação deve possibilitar a realização de pedidos através do mesmo e reenvio a cozinha|Alta|
| RF-06 |Permitir que seja possível incorporar imagens aos produtos|Média|
| RF-07 |A aplicação deve possibilitar a inclusão de produtos em oferta por tempo limitado, e após o tempo definido serão retirados automaticamente do sistema |Média|
| RF-07 |A aplicação deverá possibilitar a geração de relatórios de histórico de produtos, pedidos e mesas|Média|
| RF-08 |A aplicação deverá detalhar as edições feitas nos pedidos, uma vez quando reenviados a cozinha|Média|
| RF-09 |A aplicação deverá notificar os novos pedidos feitos pelas mesass|Média|

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais



|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | O sistema deve ser responsivo, para rodar em dispositivos móveis e pc|Alta| 
| RNF-02 | O Site deve ter uma interface organizada e de fácil usabilidade|Alta|
| RNF-03 | A aplicação deverá permitir seu acesso por QR CODE|Média|
| RNF-04 | O sistema deve estar em conformidade com a Lei Geral de Proteção de Dados LGPD|Média|
| RNF-05 | Deve ser acessível para pessoas com deficiência, atendendo a padrões de acessibilidade da web|Média|
| RNF-06 | O cardápio digital deve carregar rapidamente|Baixa|

**Prioridade: Alta / Média / Baixa. 

