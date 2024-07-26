<h1>Desafio prático curso Full Cycle</h1>

>Descrição do desafio
<h5>Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Não esqueça de colocar o volume na aplicação para o ambiente de desenvolvimento. 

Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node/JavaScript.</h5>

<br/>

>Descrição do projeto
<h5>
Este projeto consiste em gerar uma imagem docker que tenha uma aplicação Node conectada a um banco de dados MySQL e com o Nginx sendo utilizado como proxy reverso.

Ao acessar a aplicação pela porta 8080 a mesma irá incluir um valor no banco de dados, mostrar a frase "Full Cycle Rocks!!" e listar os nomes cadastrados no banco.

<br/>
Na raiz do projeto executar o comando a seguir:

<br/>

-  docker-compose up -d ou docker-compose up -d --build
</h5>