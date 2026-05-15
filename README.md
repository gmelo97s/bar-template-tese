# BAR DIGITAL — Landing Page

Landing page React gerada a partir do design Google Stitch.

## 🚀 Deploy no Cloudflare Pages via GitHub

### 1. Instalar dependências e testar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:5173 para visualizar.

### 2. Subir para o GitHub

```bash
git init
git add .
git commit -m "feat: bar digital landing page"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/bar-digital.git
git push -u origin main
```

### 3. Deploy no Cloudflare Pages

1. Acesse [dash.cloudflare.com](https://dash.cloudflare.com)
2. Vá em **Workers & Pages → Pages → Create a project**
3. Conecte sua conta do GitHub e selecione o repositório `bar-digital`
4. Configure o build:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Clique em **Save and Deploy** ✅

O Cloudflare vai detectar automaticamente o Vite e fazer o build. Em alguns minutos o site estará online com URL do tipo `bar-digital.pages.dev`.

## 🛠 Tech Stack

- React 18
- Vite 6
- CSS Modules
- Google Fonts (Montserrat + Material Symbols)
