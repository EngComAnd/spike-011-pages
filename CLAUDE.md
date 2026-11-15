# Regras do repositório

- Pull request obrigatório; nada vai direto para a main.
- Página estática: o site fica em `public/` (publicado no GitHub Pages depois do Gate 3 e do clique de pessoa).
- Testes em `tests/`, um arquivo por critério de aceite; os testes leem `public/` com `node:fs` (sem navegador).
- TypeScript strict: `npm run typecheck` precisa passar. `npm run build` valida o site.
- Não edite `.github/`, `scripts/` nem `package.json`: são do modelo da esteira.
- Sem segredos no repositório.
