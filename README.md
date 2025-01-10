# CineList 🎥

CineList é uma aplicação web para gerenciar filmes, permitindo aos usuários explorar filmes populares, salvar seus favoritos e acessar informações detalhadas de cada título. 

## Funcionalidades

- **Home:**
  - Lista os filmes em cartaz obtidos via API do TMDb.
  - Permite acessar detalhes de cada filme.
- **Detalhes do Filme:**
  - Exibe informações detalhadas como título, sinopse e avaliação.
  - Opção de salvar o filme na lista de favoritos.
  - Link para buscar trailers no YouTube.
- **Favoritos:**
  - Exibe os filmes salvos pelo usuário.
  - Permite excluir filmes da lista.
- **Página de Erro 404:**
  - Página amigável para rotas inexistentes, com link para voltar à lista de filmes.

## Tecnologias Utilizadas

- **React**
- **React Router DOM**
- **Axios**
- **React Toastify**
- **CSS Modules**

## Estrutura do Projeto

- **App.js:** Configura o contêiner principal e as rotas.
- **Home:** Página inicial para listar os filmes em cartaz.
- **Filme:** Página de detalhes de um filme específico.
- **Favoritos:** Página para gerenciar a lista de filmes favoritos.
- **Erro:** Página de erro 404.
- **Header:** Componente para navegação no site.
- **api.js:** Configuração do Axios para comunicação com a API do TMDb.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/cinelist.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd cinelist
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute a aplicação:
   ```bash
   npm start
   ```

5. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## Configuração da API

Esta aplicação utiliza a API do TMDb para buscar informações de filmes. Certifique-se de substituir a chave da API em **api.js** com sua própria chave obtida no [site do TMDb](https://www.themoviedb.org/documentation/api).

## Estrutura de Diretórios

```plaintext
src/
├── components/
│   └── Header
├── pages/
│   ├── Home
│   ├── Filme
│   ├── Favoritos
│   └── Erro
├── services/
│   └── api.js
├── App.js
├── index.js
├── index.css
```


## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido por Yuri Teodoro**
