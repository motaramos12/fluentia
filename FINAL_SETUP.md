# 🚀 SETUP FINAL - FLUENTIA APP

## 1️⃣ CRIAR REPOSITÓRIO NO GITHUB

```bash
# Se ainda não tem repositório:
git remote add origin https://github.com/SEU_USERNAME/fluentia.git
git branch -M main
git push -u origin main
```

## 2️⃣ CONFIGURAR NETLIFY

### 2a. Criar Conta
- Vai a https://netlify.com
- Clica "Sign up" → GitHub
- Autoriza acesso

### 2b. Conectar Repositório
1. Dashboard → "New site from Git"
2. Seleciona GitHub
3. Escolhe repositório `fluentia`
4. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
5. **Clica "Deploy"**

### 2c. Configurar Environment Variables
Vai a **Site settings → Build & deploy → Environment**

Adiciona:
```
NEXT_PUBLIC_SUPABASE_URL = https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGc...
```

## 3️⃣ CONFIGURAR GITHUB ACTIONS (CI/CD)

Vai a **Settings → Secrets and variables → Actions**

Adiciona os seguintes secrets:

| Secret | Valor |
|--------|-------|
| `NETLIFY_AUTH_TOKEN` | Token do Netlify (Settings → Applications → New access token) |
| `NETLIFY_SITE_ID` | ID do site (Netlify dashboard → Site info) |
| `SUPABASE_URL` | URL do projeto Supabase |
| `SUPABASE_ANON_KEY` | Anon key do Supabase |

## 4️⃣ O QUE ACONTECE AGORA

Cada vez que fazes `git push`:

✅ GitHub Actions:
- Instala dependências
- Roda linter
- Faz build
- Verifica segurança (npm audit + secrets)
- Faz deploy automático no Netlify

🔐 Segurança:
- Testa vulnerabilidades conhecidas
- Procura secrets/credenciais
- Valida código

📊 Resultado:
- App deployado automaticamente em: `https://seu-app-fluentia.netlify.app`

## 5️⃣ VERIFICAR DEPLOY

Após push:
1. Vai a https://github.com/seu_username/fluentia/actions
2. Vê o workflow rodando
3. Se tudo verde ✅, app está deployado

---

## 🎯 RESUMO

**Antes (Manual):**
- Build local → ZIP → Netlify drag & drop → 10 min

**Depois (Automático):**
- `git push` → GitHub Actions → Deploy automático → 2 min ✅

**Segurança:**
- Cada deploy verifica vulnerabilidades
- Impossível fazer push com secrets commitados
- CI/CD catches bugs antes de ir produção

---

## 📞 TROUBLESHOOTING

### Build falha
→ Vê logs em GitHub Actions → Actions → Clica no workflow falho

### Deploy não sai
→ Verifica se os secrets estão configurados no GitHub

### Netlify site não atualiza
→ Vai a Netlify → Deployments → Vê se houve erro

