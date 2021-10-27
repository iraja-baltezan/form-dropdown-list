# Menu drop-down

Pedaço de código HTML, CSS e JavaScript (Vanilla JS) para ocultar e exibir uma lista como um menu drop-down.

O item selecionado é inserido em um lista visível e também um elemento input do tipo hidden ou o próprio elemento textarea, que será oculto, de um formulário.

A intenção é usar este código em um site com um editor de formulários que permite a inserção de HTML, CSS.

Objetivos:

- Criar um menu drop-down semelhante a um input do tipo select.
- Se o navegador suporta o elemento HTML template:
    - O elemento textarea será oculto.
    - O elemento textarea (ou um input hidden) conterá o código de uma tabela html com os itens escolhidos.
    - O código da tabela será limitado ao que é suportado pelos clientes de e-mail.
    - Um botão para abertura e fechamento do menu de opções será inserido na posição onde o textarea estava visível.
    - Um quadro representando a lista dos escolhidos será inserido abaixo do botão de controle do menu.
    - Clicar em uma opção do menu insere a opção na lista dos escolhidos.
    - A cada inserção de um item, este tem a quantidade incrementada em 1 unidade
    - Cada item inserido contém os botões + e - para alterar quantidade do item.
    - Remover item da lista se a quantidade for 1 e o botão "-" for pressionado.
    - Os menu deve respoder a eventos de teclado como um controle select.
- Se o navegador não suporta o elemento HTML template, então o textarea fica visível e o usuário altera seu texto manualmente.
- Cada opção do menu pode conter mais elementos filhos com estilos de apresentação diversos.


## Página de exemplo

_Este código foi postado como um Gist. Mas resolvi criar o repositório para prover esta visualização do resultado no GitHub Pages_

[https://iraja-baltezan.github.io/form-dropdown-list/](https://iraja-baltezan.github.io/form-dropdown-list/)


---