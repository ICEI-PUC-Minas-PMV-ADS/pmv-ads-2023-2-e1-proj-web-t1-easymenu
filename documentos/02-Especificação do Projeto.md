# Especificação do Projeto

## Perfis de Usuários


<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil Cliente </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px"> Os clientes seriam os usuários finais do sistema, sendo capazes de acessar o cardápio online, possuir total visualização sobre prato escolhido, bebidas e outras opções disponíveis, personalizar os pedidos de acordo com suas preferências (por exemplo, escolher ingredientes, ajustar porções, etc.), acesso ao cardápio com maior agilidade sem depender de terceiros, informações completas e menu atualizado.  </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td> Facilidade de uso dos cardápios, visualização clara e rapidez na personalização dos seus pedidos. Ter um cardápio digital, possível de personalizar os seus pratos, acrescentar e retirar ingredientes. </td>
</tr>
<p></p>
<p></p>
<tr align=center>
<th colspan="2">Perfil Proprietário/Gerente do Estabelecimento </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px"> Os gerentes e proprietários seriam responsáveis por configurar e gerenciar o sistema. Eles poderiam adicionar, editar ou remover itens do cardápio, definir preços, ajustar opções de personalização, configurar promoções especiais, analisar dados de pedidos para tomar decisões. Informações e relatórios de performance do sistema. Esse perfil de usuário busca flexibilidade e controle sobre as opções oferecidas aos clientes, além de insights para melhorar a eficiência e a lucratividade do restaurante. E são adeptos a inovação.  </td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td> Gerenciamento do cardápio, gestão de promoções, controle de estoque, praticidade e flexibilidade. Cardápio digital com fotos reais dos pratos e dos ingredientes que fomentasse o consumo no estabelecimento. </td>
</tr>
  
</tbody>
</table>


## Histórias de Usuários


|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Cliente            | Personalização dos itens|Adaptar ao meu gosto|
| Proprietário       | Um cardápio passível de edição e interativo|Para alterar os produtos disponíveis|
| Proprietário|Um cardápio digital passível de fazer feedbacks e avaliações|Poder ter controle de quantidades de pedidos, pratos mais consumidos e fazer melhorias em benefício do cliente.                        |
| Cliente            |Um menu de fácil uso, visualização clara e rapidez nos pedidos|Ter a melhor experiência possível que o estabelecimento pode oferecer|
| Cliente            |Visualizar imagens reais dos produtos oferecidos| Para fazer uma escolha mais assertiva e trazer uma ideia mais real do produto|
| Cliente            |Autonomia na visualização do menu, controle sobre os itens pedidos|Não depender de disponibilidade de atendente|
| Proprietário       |Inovação e estimular o consumo de pratos/sobremesas pouco exploradas|Aumentar o número de vendas de adicionais e sobremesas e acompanhar atualização do mercado|


## Requisitos do Projeto

O propósito do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais



|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |A programação deverá incluir a possibilidade de acrescentar ou alterar itens do produto pelo cliente|Alta| 
| RF-02 |No acesso do administrador, deverá ter a possibilidade de o mesmo editar, acrescentar e excluir a qualquer momento que desejar, tópicos da sua lista de produtos ofertados|Alta|
| RF-03 |O site deve exibir uma comanda do que já foi consumido pelo cliente|Alta|
| RF-04 |Permitir que seja possível incorporar imagens com facilidade|Alta|
| RF-05 |O site deve exibir o valor total do pedido após ser selecionado os pratos pelo cliente|Média|
| RF-06 |A aplicação deve permitir a avalição do serviço|Média|

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais



|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
|     RNF-01     | O sistema deve ser responsivo, para rodar em dispositivos móveis e pc|Alta| 
| RNF-02 | Menu com disponibilização de fotos em cada item e divisões por categoria|Média|
| RNF-03 | Sistema para o cliente deve ser aberto por QR CODE|Alta|
| RNF-04 | O sistema deve estar em conformidade com a Lei Geral de Proteção de Dados LGPD|Alta|
| RNF-05 | O sistema deve pedir senha para o administrador acessar|Alta|
| RNF-06 | O sistema deve ter vários níveis de senha para acessos. Exemplo: Os clientes não devem ter acesso às informações por completo do painel Administrador|Alta|
| RNF-07 | O cardápio digital deve carregar rapidamente, proporcionando uma experiência de usuário ágil|Alta|
| RNF-08 | Deve ser acessível para pessoas com deficiência, atendendo a padrões de acessibilidade da web|Média|
| RNF-09 | O Site deve ter uma interface organizada e de fácil usabilidade|Alta|
| RNF-10 | O site deve conter categoria de alimentos bem divididas|Média|

**Prioridade: Alta / Média / Baixa. 

