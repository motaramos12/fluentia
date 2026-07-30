# 🚀 Deployment no Netlify

## Opção 1: Deploy Automático (Recomendado)

### 1. Preparar GitHub
```bash
git remote add origin https://github.com/SEU_USERNAME/fluentia.git
git branch -M main
git push -u origin main
```

### 2. Deploy no Netlify
1. Vai a https://netlify.com
2. Clica "New site from Git"
3. Escolhe GitHub → Autoriza
4. Seleciona o repositório `fluentia`
5. Settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Environment variables (adiciona):
     ```
     NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
     NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
     ```
6. Clica "Deploy site"

**Resultado:** Netlify vai construir e deployar automaticamente cada vez que faças push para main.

---

## Opção 2: Deploy Manual

### 1. Build local
```bash
npm run build
```

### 2. Fazer zip dos ficheiros
```bash
zip -r fluentia-build.zip .next/
```

### 3. Upload no Netlify
1. Vai a https://app.netlify.com/drop
2. Arrasta o ficheiro `fluentia-build.zip`
3. Pronto! Tens um link público tipo:
   ```
   https://random-name-12345.netlify.app
   ```

---

## Opção 3: Netlify CLI (Mais Rápido)

### Instalar
```bash
npm install -g netlify-cli
```

### Deploy
```bash
netlify login
netlify deploy --prod
```

---

## ⚠️ Importante: Variáveis de Ambiente

Para que a autenticação funcione, PRECISA adicionar no Netlify Dashboard:

**Settings → Build & deploy → Environment**

```
NEXT_PUBLIC_SUPABASE_URL = https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGc...
DATABASE_URL = postgresql://...
```

Pega estes valores no dashboard do Supabase.

---

## 🎯 Resumo Rápido

**Em 3 passos:**
1. Cria conta em https://netlify.com (grátis)
2. Conecta GitHub (ou upload manual)
3. Configura variáveis de ambiente
4. Done! 🎉

**Link resultante:**
```
https://seu-app-name.netlify.app
```

---

## Troubleshooting

### Build falha com "DATABASE_URL not found"
→ Adiciona as variáveis de ambiente no Netlify Dashboard

### Páginas retornam 404
→ Verifica se `netlify.toml` está configurado corretamente

### Autenticação não funciona
→ Verifica as credenciais do Supabase em variáveis de ambiente

### "Cannot find module '@supabase/...'"
→ Roda `npm install` e `npm run build` localmente primeiro
