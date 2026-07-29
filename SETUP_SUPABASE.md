# Setup Supabase para Fluentia

## 1. Criar projeto no Supabase

1. Vai a https://supabase.com/dashboard
2. Clica "New Project"
3. Preenche:
   - Project name: `fluentia`
   - Database password: (gera uma segura)
   - Region: (escolhe próximo de ti)
4. Espera que o projeto seja criado (~2 min)

## 2. Copiar credenciais

1. No dashboard do projeto, vai a **Settings → API**
2. Copia:
   - `NEXT_PUBLIC_SUPABASE_URL` (Project URL)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (anon public key)
3. Va a **Settings → Database** e copia:
   - `DATABASE_URL` (Connection string → URI)

## 3. Configurar variáveis de ambiente

1. Copia `.env.example` para `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edita `.env.local` e preenche:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
   DATABASE_URL=postgresql://postgres:PASSWORD@db.PROJECTREF.supabase.co:5432/postgres
   ```

## 4. Aplicar schema à base de dados

```bash
npm run db:push
```

Isto vai criar todas as tabelas (users, userProgress, moduleProgress, etc.)

## 5. Testar autenticação

1. Inicia servidor: `npm run dev`
2. Vai a http://localhost:3000
3. Deverá redirecionar para `/auth/login`
4. Clica em "Cria uma conta"
5. Cria uma conta de teste

Se conseguir criar conta e entrar, tudo está funcionando! ✅

## Troubleshooting

### Erro: "DATABASE_URL is not defined"
- Verifica se `.env.local` existe e tem `DATABASE_URL`
- Reinicia servidor: `npm run dev`

### Erro: "Missing Supabase credentials"
- Verifica se `.env.local` tem `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Renova as chaves no dashboard Supabase se necessário

### Erro ao fazer push de migrations
- Verifica se a connection string em `DATABASE_URL` está correta
- Testa: `psql <DATABASE_URL>`
