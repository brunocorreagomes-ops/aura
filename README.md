# AuraSong — Transforme Sua História em Música

AuraSong é uma plataforma premium que transforma memórias e sentimentos em canções originais e personalizadas. Utilizando inteligência artificial de ponta e curadoria musical, criamos o presente definitivo para momentos inesquecíveis.

## 🚀 Deploy no GitHub Pages

Este projeto está configurado para deploy automático no GitHub Pages via GitHub Actions.

1.  **Suba o código para o seu repositório no GitHub.**
2.  **Ative o GitHub Pages**:
    *   Vá em **Settings** > **Pages**.
    *   Em **Build and deployment** > **Source**, selecione **GitHub Actions**.
3.  **Configuração de Subdiretório** (opcional):
    *   Se o seu site não estiver na raiz (ex: `usuario.github.io/projeto/`), adicione uma variável de ambiente `VITE_BASE_PATH` com o valor `/projeto/` nos segredos do seu repositório ou no arquivo de workflow.

O site possui um sistema de roteamento SPA compatível com o GitHub Pages através dos arquivos `404.html` e scripts no `index.html`.

## 🛠️ Tecnologias Utilizadas

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Framer Motion** (Animações)
- **Lucide React** (Ícones)
- **React Helmet Async** (SEO)

## 📦 Instalação e Uso

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/aurasong.git
   cd aurasong
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   O projeto estará disponível em `http://localhost:3000`.

## 🏗️ Build para Produção

Para gerar a versão final otimizada:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`, prontos para serem hospedados em serviços como GitHub Pages, Vercel ou Netlify.

## 📄 Licença

Este projeto está sob a licença Apache-2.0. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
Desenvolvido com ❤️ por AuraSong.
