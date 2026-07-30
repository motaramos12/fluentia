# 🚀 Deploy Rápido no Netlify (5 minutos)

## Passo 1: Aceder a https://app.netlify.com/drop

## Passo 2: Carregar os ficheiros do build

```bash
# Comprime apenas a pasta .next (é o que precisa fazer deploy)
zip -r fluentia-build.zip .next package.json package-lock.json public
```

Ou, se quiseres fazer via GitHub (automático):

```bash
git push origin main
```

## Passo 3: No Netlify Dashboard

1. **New site from Git** → Escolhe o repositório fluentia
2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Environment variables:**
   - `NEXT_PUBLIC_SUPABASE_URL` = [da dashboard Supabase]
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = [da dashboard Supabase]
4. **Deploy!**

## Resultado

Assim que o deploy terminar, terás um link tipo:
```
https://seu-app-fluentia.netlify.app
```

Está pronto! 🎉

