# Fluentia — Setup Completo (Passo 1 ✓)

## O que foi feito:

### ✅ Passo 1: Scaffolding
- [x] Next.js 15 (App Router) criado
- [x] TypeScript configurado (strict mode)
- [x] Tailwind CSS v4 instalado
- [x] Dependências core instaladas:
  - Drizzle ORM + postgres
  - Supabase (@supabase/ssr, @supabase/supabase-js)
  - LiveKit (client + server SDK)
  - Claude API (@anthropic-ai/sdk)
  - Recharts para gráficos
  - Framer Motion para animações
- [x] Estrutura de diretórios criada
- [x] CLAUDE.md com blueprint completo
- [x] .env.local.example com variáveis necessárias
- [x] Drizzle schema definido (todas as tabelas)
- [x] Drizzle config e scripts npm criados
- [x] Clientes Supabase base (client.ts, server.ts)
- [x] LiveKit & Claude libs de scaffold

## Próximos passos (Passo 2):

### 🔧 Supabase Setup
1. Criar conta em https://supabase.com
2. Criar novo projeto
3. Copiar `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` do dashboard
4. Copiar `DATABASE_URL` (connection string)
5. Gerar e copiar `SUPABASE_SERVICE_ROLE_KEY`
6. Preencher `.env.local` com estas credenciais

### 🚀 Database Schema
1. Depois de `.env.local` estar configurado, rodar:
   ```bash
   npm run db:push
   ```
   Isto vai aplicar o schema Drizzle ao Postgres do Supabase

2. Gerar tipos TypeScript:
   ```bash
   npm run db:generate
   ```

### 📝 Notes
- O projeto está pronto para desenvolvimento local
- Instala `pnpm` localmente antes de começar:
  ```bash
  npm install -g pnpm
  ```
  (ou usa `npm` se preferires)
- Todos os ficheiros core estão em `src/lib/` organizados por domínio
- Ver `CLAUDE.md` para referência completa de arquitetura

## Deployment (Passo 15 — mais tarde)
Quando tiver tudo pronto, fazer deploy no Netlify:
1. Push para Git repo (GitHub, GitLab, etc.)
2. Conectar repo ao Netlify
3. Configurar environment variables no Netlify dashboard
4. Deploy automático em cada push para `main`

## Commands úteis
- `npm run dev` — Servidor local
- `npm run db:studio` — Visualizar/editar DB via UI
- `npm run lint` — Verificar code style
