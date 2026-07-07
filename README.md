# Proposta Ótica 5K — Capital Consultoria Jr.

Landing page para apresentar a proposta de consultoria de imagem e identidade
visual da Ótica 5K. Site estático (HTML/CSS/JS puro, sem build), pronto para
GitHub + Vercel.

## Estrutura

```
.
├── index.html    # conteúdo e estrutura da página
├── styles.css    # tokens de cor/tipografia e layout
├── script.js     # efeito de "lente em foco" no hero
└── README.md
```

## Rodar localmente

Não precisa de instalação. Basta abrir `index.html` no navegador, ou rodar
um servidor simples:

```bash
python3 -m http.server 8000
# depois abra http://localhost:8000
```

## Publicar no GitHub

```bash
git init
git add .
git commit -m "Landing page: Proposta Ótica 5K"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/otica5k-landing.git
git push -u origin main
```

## Publicar na Vercel

1. Acesse [vercel.com](https://vercel.com) e clique em **Add New → Project**.
2. Importe o repositório que você acabou de criar no GitHub.
3. Framework preset: **Other** (site estático, sem build command nem output directory).
4. Clique em **Deploy**. Pronto — a Vercel detecta o `index.html` na raiz automaticamente.

## Personalizar

- **Cores e fontes**: tudo centralizado em `:root` no topo de `styles.css`.
- **Textos**: editar diretamente em `index.html` (cada seção tem um `id`
  correspondente ao menu/âncoras, ex: `#escopo`, `#orcamento`, `#contato`).
- **WhatsApp**: o botão de contato usa `https://wa.me/5561983856614` — troque
  o número se necessário.
