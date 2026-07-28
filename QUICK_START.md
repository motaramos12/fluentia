# 🚀 Deploy no Netlify — Versão Rápida

## Tudo pronto! Faltam 3 passos (10 min):

### 1️⃣ Conta GitHub (5 min)
- https://github.com/signup
- Email, password, confirma
- Done!

### 2️⃣ Cria repositório vazio (1 min)
- https://github.com/new
- Nome: `fluentia`
- Clica "Create repository"
- **Copia o comando que aparece** (algo como `git remote add origin https://github.com/teu-user/fluentia.git`)

### 3️⃣ Push do projeto (1 min)
Abre terminal e copia isto:

```bash
cd /Users/carlamota/fluentia
git remote add origin https://github.com/SEU_USERNAME/fluentia.git
git branch -M main
git push -u origin main
```

(Substitui `SEU_USERNAME` pelo teu username do GitHub)

### 4️⃣ Deploy no Netlify (3 min)
- https://app.netlify.com/start
- Clica "Connect to Git"
- Autoriza GitHub
- Seleciona `fluentia`
- Build command: `npm run build` (automático)
- Publish: `.next` (automático)
- **Environment Variables:**
  ```
  NEXT_PUBLIC_SUPABASE_URL = (do Supabase)
  NEXT_PUBLIC_SUPABASE_ANON_KEY = (do Supabase)
  SUPABASE_SERVICE_ROLE_KEY = (do Supabase)
  DATABASE_URL = (do Supabase)
  LIVEKIT_URL = (do LiveKit Cloud)
  LIVEKIT_API_KEY = (do LiveKit Cloud)
  LIVEKIT_API_SECRET = (do LiveKit Cloud)
  OPENAI_API_KEY = (do OpenAI)
  SIMLI_API_KEY = (do Simli)
  ANTHROPIC_API_KEY = (do Anthropic)
  ```
- Clica "Deploy site"

**Pronto em 10 minutos!** 🎉

Depois vem um URL como `https://fluentia-xyz.netlify.app`

---

## Se já tiver Supabase pronto:
- Vai ao passo 1
- Tudo o resto é automático

## Se ainda não tiver Supabase:
- Faz contas nos serviços (Supabase, OpenAI, LiveKit, Simli, Anthropic)
- Preenche as 10 variáveis no Netlify
- Pronto!

**Quer que configure o Supabase agora ou já tens?**
