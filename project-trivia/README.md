# Boas-vindas ao repositório do projeto de Trivia!

Para realizar o projeto, atente-se a cada passo descrito a seguir e, se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.


# Entregáveis

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Você deverá desenvolver um jogo de perguntas e respostas baseado no jogo **Trivia** _(tipo um show do milhão americano rs)_ utilizando _React e Redux_, desenvolvendo em grupo suas funcionalidades de acordo com as demandas definidas em um quadro _Kanban_. Confira o Slack para saber como acessar o quadro! Para viver um cenário mais próximo do mercado de trabalho, você deve fazer uma cópia desse quadro para utilizar com seu grupo. É de suma importância que o grupo se organize utilizando o quadro para maior eficiência e para que se minimizem os conflitos que a união de vários códigos trará. A partir dessas demandas, teremos uma aplicação onde a pessoa usuária poderá:

  - Logar no jogo e, se o email tiver cadastro no site [Gravatar](https://pt.gravatar.com/), ter sua foto associada ao perfil da pessoa usuária.
  - Acessar a página referente ao jogo, onde se deverá escolher uma das respostas disponíveis para cada uma das perguntas apresentadas. A resposta deve ser marcada antes do contador de tempo chegar a zero, caso contrário a resposta deverá ser considerada errada.
  - Ser redirecionada, após 5 perguntas respondidas, para a tela de score, onde o texto mostrado depende do número de acertos.
  - Visualizar a página de ranking, se quiser, ao final de cada jogo.
  - Configurar algumas opções para o jogo em uma tela de configuração acessível a partir do cabeçalho do app.

</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

Nesse projeto, você será capaz de:

  - Criar um store Redux em aplicações React

  - Criar reducers no Redux em aplicações React

  - Criar actions no Redux em aplicações React

  - Criar dispatchers no Redux em aplicações React

  - Conectar Redux aos componentes React

  - Criar actions assíncronas na sua aplicação React que faz uso de Redux.

  - Escrever testes para garantir que sua aplicação possua uma boa cobertura de testes.
</details>

 
<details>
  <summary><strong>💻 Protótipo do projeto no Figma</strong></summary><br />

Além da qualidade do código e do atendimento aos requisitos, um bom layout é um dos aspectos responsáveis por melhorar a usabilidade de uma aplicação e turbinar seu portfólio!

Você pode estar se perguntando: *"Como deixo meu projeto com um layout mais atrativo?"* 🤔

Para isso, disponibilizamos esse [protótipo do Figma](https://www.figma.com/file/59PXrUUfqaRT9P3oDsKVDS/%5BProjeto%5D%5BFrontend%5D-Trivia) para lhe ajudar !

⚠️ A estilização de sua aplicação não será avaliada nesse projeto, portanto esse protótipo é apenas uma **sugestão** e seu uso é **opcional**. Sinta-se à vontade para modificar o layout e deixá-lo do seu jeito.

</details>

# Requisitos

Nesse projeto, a pessoa que joga deve conseguir completar o jogo e conseguir ver seu placar depois de responder todas as 5 perguntas, além de acessar a tela de configurações e de ranking.

## 1. Crie a tela de login, onde a pessoa que joga deve preencher as informações para iniciar um jogo

---

## 2. Crie o botão de iniciar o jogo

---

## 3. Crie um botão que leva a pessoa para tela de configuração

---

## 4. Desenvolva testes para atingir 90% de cobertura da tela de Login

---

## 5. Crie um _header_ que deve conter as informações da pessoa jogadora

---

## 6. Crie a página de jogo que deve conter as informações relacionadas à pergunta

---

## 7. Desenvolva o estilo que, ao clicar em uma resposta, a correta deve ficar verde e as incorretas, vermelhas

---

## 8. Desenvolva um timer onde a pessoa que joga tem 30 segundos para responder

---

## 9. Crie o placar com as seguintes características:

---

## 10. Crie um botão de `Next` que apareça após a resposta ser dada

---

## 11. Desenvolva o jogo de forma que a pessoa jogadora deve responder 5 perguntas no total

---

## 12. Desenvolva o header de _feedback_ que deve conter as informações da pessoa jogadora

---

## 13. Crie a mensagem de _feedback_ para ser exibida a pessoa usuária

---

## 14. Exiba as informações relacionadas aos resultados obtidos para a pessoa usuária

---

## 15. Crie a opção para a pessoa jogadora poder jogar novamente

---

## 16. Crie a opção para a pessoa jogadora poder visualizar a tela de _ranking_

---

## 17. Desenvolva testes para atingir 90% de cobertura da tela de Feedbacks

---

## 18. Crie um botão para ir ao início

---

## 19. Crie o conteúdo da tela de _ranking_

---

## 20. Desenvolva testes para atingir 90% de cobertura da tela de Ranking

---

## 21. Desenvolva testes para atingir 90% de cobertura da tela de Jogo

---
## 22. Desenvolva testes para atingir 95% de cobertura total

---

### 23. Ao mudar o valor do dropdown categoria, apenas perguntas da categoria selecionada devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave category no retorno da API;

---

### 24. Ao mudar o valor do dropdown dificuldade, apenas perguntas da dificuldade selecionada devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave difficulty no retorno da API;

---

### 25. Ao mudar o valor do dropdown tipo, apenas perguntas do tipo selecionado devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave type no retorno da API.

