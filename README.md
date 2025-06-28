<p align="center">
    <img loading="lazy" src="https://files.engaged.com.br/5db0810e95b4f900077e887e/account/5db0810e95b4f900077e887e/xMCS8NFKTMqwhefy8WLd_catolica-horizontal.png" width="300">
</p>

# Desenvolvimento Ágil - Modelo de Projeto

## Situação do Projeto
![Status](https://img.shields.io/badge/Status-Em%20Progresso-yellow)

![Etapa](https://img.shields.io/badge/Etapa-N1-000000)![Etapa](https://img.shields.io/badge/N2-000000)![Etapa](https://img.shields.io/badge/N3-green)

# HelPets

## Tema: *Controle da Gestão de Animais para Intituições de Resgate*

---

## 1. Problema/Objetivo

*Atualmente, é mais e mais comum encontrar animais abandonados pelas ruas e, muitas vezes, as ONGs de resgate fazem toda a diferença para a vida dos queridos e amáveis bichanos.*
*Porém, após o resgate, como é feito esse registro e controle dos animais? Existe um meio de identificar, por meios visuais, quais as localidades, espécies, raças, gêneros e outras caracerísticas que mais são abandonadas?*

*A aplicação HelPet visa auxiliar as ONGs no controle e administração dos animais resgatados por meio de interfaces gráficas, baseadas em CRUD, que identifiquem os pontos para chave nos resgates dos animais.*

---

## 2. Levantamento de Requisitos (Histórias de Usuário)

- Como ONG, quero cadastrar minha instituição com nome, CNPJ, endereço, telefone e responsável para ter acesso ao sistema e gerenciar os animais resgatados.
- Como ONG, quero cadastrar animais resgatados informando nome, espécie, raça, idade estimada, gênero, estado de saúde, data e local do resgate para organizar os animais sob minha responsabilidade.
- Como ONG, quero atualizar o status dos animais para “Resgatado”, “Disponível para adoção”, “Adotado” ou “Falecido” para manter um controle sobre a situação de cada animal.
- Como ONG, quero vincular um tutor a um animal no momento da adoção para manter um histórico e facilitar o acompanhamento pós-adoção.
- Como ONG, quero buscar e filtrar animais resgatados por espécie, raça, gênero, local do resgate e status para facilitar a localização e gestão dos animais.
- Como ONG, quero exportar dados de resgates e adoções em formatos como CSV ou PDF para gerar relatórios e compartilhar informações quando necessário.
- Como ONG, quero registrar e visualizar os locais onde os animais foram resgatados para identificar áreas de maior incidência de abandono.
- Como ONG, quero editar e excluir registros de animais, tutores e resgates para corrigir erros e manter os dados atualizados.
- Como administrador do sistema, quero gerenciar ONGs cadastradas, podendo ativá-las ou desativá-las para garantir que apenas instituições autorizadas utilizem o sistema.
- Como usuário do sistema, quero recuperar minha senha via e-mail para restaurar meu acesso caso eu a perca.

---

## 3. Priorização dos Requisitos (MoSCoW)

| Requisito                                                                 | Prioridade |
|---------------------------------------------------------------------------|------------|
| Cadastro de ONGs com nome, CNPJ, endereço, telefone e responsável         | Must       |
| Cadastro de animais resgatados com informações detalhadas                 | Must       |
| Atualização do status dos animais (Resgatado, Disponível, Adotado, etc.)  | Must       |
| Vinculação de tutor a um animal no momento da adoção                      | Must       |
| Busca e filtragem de animais por critérios específicos                    | Must       |
| Gerenciamento de ONGs pelo administrador (ativação/desativação)           | Must       |
| Exportação de dados de resgates e adoções em CSV ou PDF                   | Should     |
| Recuperação de senha via e-mail                                           | Must       |
| Registro e visualização dos locais de resgate                             | Should     |
| Edição e exclusão de registros de animais, tutores e resgates             | Must       |
| Relatórios e estatísticas sobre resgates, adoções e locais de abandono    | Should     |
| Interface responsiva para dispositivos móveis e desktops                  | Must       |
| Uso de banco de dados relacional                                          | Must       |
| Implementação de segurança (criptografia de senhas, por exemplo)          | Must       |
| Tempo de resposta otimizado para operações CRUD                           | Should     |
| Boas práticas de acessibilidade na interface                              | Could      |
| Escalabilidade para gerenciar grande volume de dados                      | Should     |
| Interface intuitiva com ícones e cores amigáveis                          | Could      |
| Compatibilidade com os navegadores mais utilizados                        | Should     |
| Backups periódicos dos dados                                              | Could      |


---

## 4. Definição do MVP (Produto Mínimo Viável)

O MVP (Produto Mínimo Viável) do sistema HelPets consiste nas seguintes funcionalidades essenciais para validar a proposta e já gerar valor para as ONGs:

- Cadastro de ONGs com informações básicas (nome, CNPJ, endereço, telefone e responsável).
- Autenticação e login de ONGs cadastradas.
- Cadastro e gerenciamento de animais resgatados, incluindo dados como espécie, raça, idade estimada, gênero, estado de saúde e local/data do resgate.
- Atualização do status dos animais para “Resgatado”, “Disponível”, “Adotado” ou “Falecido”.
- Cadastro de tutores e vinculação a animais adotados.
- Interface gráfica funcional com foco em usabilidade (CRUD completo).
- Filtros básicos para busca de animais por status, espécie ou local do resgate.

---

## 5. Organização das Entregas por Sprint

As Sprints do projeto estão disponíveis no [Trello](https://trello.com/w/helpets8/home).

### Sprint 1
- Criação do repositório GitHub e organização inicial da equipe.
- Definição do escopo, levantamento de requisitos e elaboração do README.
- Criação do Trello com backlog inicial e organização das tarefas.

### Sprint 2
- Modelagem do banco de dados relacional (ONG, Animal, Tutor, Resgate).
- Estruturação básica do backend com as rotas principais (Node/Express ou similar).
- Criação das entidades e relações no ORM.

### Sprint 3
- Implementação do cadastro e login de ONGs com autenticação.
- Cadastro de animais resgatados com todos os campos necessários.
- Página de listagem dos animais com exibição básica de dados.

### Sprint 4
- Implementação da edição e exclusão de registros (CRUD completo).
- Tela de visualização individual do animal com seus dados completos.
- Melhoria da interface com layout responsivo.

### Sprint 5
- Cadastro e gerenciamento de tutores/adotantes.
- Vinculação de tutor a animal no processo de adoção.
- Atualização do status do animal após adoção.

### Sprint 6
- Implementação de filtros por espécie, status, local do resgate e nome.
- Interface para busca rápida de animais cadastrados.
- Integração entre módulos (animais, tutores e ONGs).

### Sprint 7
- Exportação de dados em CSV e PDF (resgates, adoções).
- Registro e visualização dos locais de resgate com base geográfica.
- Criação de painéis com informações resumidas (cards ou dashboards).

### Sprint 8
- Melhorias gerais no design e experiência do usuário (UX/UI).
- Testes de usabilidade e verificação de acessibilidade.
- Deploy da aplicação e documentação final do projeto.
---

## 6. Entregas e Valor Incremental

- Após a **Sprint 1**: *[Descreva o que já será utilizável/testável]*
- Após a **Sprint 2**: *[Descreva como o sistema evolui]*
- Após a **Sprint 3**: *[Descreva como o sistema estará mais completo]*

---

## Observações Finais

Este projeto reforçou a importância do trabalho em equipe, da empatia com o usuário final e da capacidade de adaptação em contextos de incerteza. Aplicar os conhecimentos de Engenharia de Software em um caso concreto nos motivou a buscar soluções mais eficazes, pesquisando além do conteúdo visto em sala. A proposta do *HelPets* nos inspirou não apenas tecnicamente, mas também pessoalmente, mostrando que é possível usar a tecnologia para gerar impacto social positivo. Esperamos que, no futuro, o sistema possa ser expandido e utilizado por ONGs reais, colaborando com o bem-estar animal e a organização de instituições que tanto precisam de apoio.

## Contribuidores
A equipe envolvida neste projeto é constituída por alunos da 6ª Fase (20251) do curso de Engenharia de Software do Centro Universitário Católica SC de Jaraguá do Sul.

<div align="center">
<table>
  <tr>
    <td align="center"><a href="https://github.com/HigorAz"><img loading="lazy" src="https://avatars.githubusercontent.com/u/141787745?v=4" width="115"><br><sub>Higor Azevedo</sub></a></td>
    <td align="center"><a href="https://github.com/AoiteFoca"><img loading="lazy" src="https://avatars.githubusercontent.com/u/141975272?v=4" width="115"><br><sub>Nathan Cielusinski</sub></a></td>
    <td align="center"><a href="https://github.com/MrNicolass"><img loading="lazy" src="https://avatars.githubusercontent.com/u/80847876?v=4" width="115"><br><sub>Nicolas Gustavo Conte</sub></a></td>
    <td align="center"><a href="https://github.com/Colombao"><img loading="lazy" src="https://avatars.githubusercontent.com/u/128653143?v=4" width="115"><br><sub>João Vitor Colombo</sub></a></td>
    <td align="center"><a href="https://github.com/vitormz5"><img loading="lazy" src="https://avatars.githubusercontent.com/u/113218415?v=4" width="115"><br><sub>Vitor Maiochi Ziehlsdorff</sub></a></td>
    <td align="center"><a href="https://github.com/Gabrid-0"><img loading="lazy" src="https://avatars.githubusercontent.com/u/148984768?v=4" width="115"><br><sub>Gabriel de Oliveira</sub></a></td>
  </tr>
</div>
