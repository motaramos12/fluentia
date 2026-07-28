# Deploy no Netlify — Instruções Rápidas

## 1️⃣ Criar Repositório no GitHub (2 min)

1. Vai para https://github.com/new
2. Nome: `fluentia`
3. Descrição: `English learning app with AI avatar tutor`
4. Deixa público (ou privado se preferir)
5. **NÃO** inicializes com README (já temos)
6. Clica "Create repository"

## 2️⃣ Push do Projeto (1 min)

Copia e cola isto no terminal na pasta do projeto:

```bash
cd /Users/carlamota/fluentia
git remote add origin https://github.com/SEU_USERNAME/fluentia.git
git branch -M main
git push -u origin main
```

Substitui `SEU_USERNAME` pelo teu username do GitHub.

## 3️⃣ Deploy no Netlify (3 min)

1. Vai para https://app.netlify.com
2. Clica "Add new site" → "Import an existing project"
3. Conecta GitHub (autoriza Netlify)
4. Seleciona `fluentia` repo
5. Configuração automática:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. **Environment variables:** Clica "Add environment variables"
   - Adiciona TODAS as 9 variáveis de `.env.local.example`:
     ```
     NEXT_PUBLIC_SUPABASE_URL
     NEXT_PUBLIC_SUPABASE_ANON_KEY
     SUPABASE_SERVICE_ROLE_KEY
     DATABASE_URL
     LIVEKIT_URL
     LIVEKIT_API_KEY
     LIVEKIT_API_SECRET
     OPENAI_API_KEY
     SIMLI_API_KEY
     ANTHROPIC_API_KEY
     ```
7. Clica "Deploy site"

**Pronto!** Em ~2 minutos tens a app deployed. Netlify cria um URL tipo `https://fluentia-xyz.netlify.app`

Depois cada vez que fazes push para `main`, a app redeploy automaticamente.

## ⚠️ Importante
Antes de fazer deploy, certifica-te que tens:
- Conta Supabase com projeto criado + DATABASE_URL funcionando
- Contas de OpenAI, Simli, LiveKit, Anthropic com APIs ativas
- `.env.local` completado localmente (para testar)

Se não tiveres tudo pronto, faz o git push agora (Passo 2) e depois configura Netlify + variáveis quando tudoestiver pronto.
