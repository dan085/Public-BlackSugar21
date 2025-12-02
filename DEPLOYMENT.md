# 🚀 Guía de Deployment - Black Sugar 21

## Deployment en Firebase Hosting

Tu aplicación está configurada para desplegarse en Firebase Hosting en **black-sugar21.web.app**

## Opción 1: Deployment Automático (Recomendado)

Usa el script automatizado que hemos creado:

\`\`\`bash
./deploy.sh
\`\`\`

Este script hará automáticamente:
1. ✅ Verificar Firebase CLI
2. ✅ Verificar autenticación
3. ✅ Construir la app para producción
4. ✅ Desplegar en Firebase Hosting

## Opción 2: Deployment Manual

### Paso 1: Instalar Firebase CLI (solo la primera vez)

\`\`\`bash
npm install -g firebase-tools
\`\`\`

### Paso 2: Autenticarse en Firebase (solo la primera vez)

\`\`\`bash
firebase login
\`\`\`

Se abrirá tu navegador para que inicies sesión con tu cuenta de Google.

### Paso 3: Construir la aplicación

\`\`\`bash
npm run build:prod
\`\`\`

Esto generará los archivos optimizados en la carpeta `dist/public-black-sugar21/browser/`

### Paso 4: Desplegar

\`\`\`bash
firebase deploy --only hosting
\`\`\`

## Opción 3: Usando npm scripts

También puedes usar los scripts de npm:

\`\`\`bash
# Build y deploy completo
npm run deploy

# Solo deploy de hosting
npm run deploy:hosting
\`\`\`

## URLs de tu aplicación

Después del deployment, tu app estará disponible en:

- 🌐 **Principal**: https://black-sugar21.web.app
- 🌐 **Alternativa**: https://black-sugar21.firebaseapp.com

## Configuración de Firebase Hosting

El archivo \`firebase.json\` está configurado con:

- ✅ **SPA Routing**: Todas las rutas redirigen a index.html
- ✅ **Cache optimizado**: Imágenes y assets con cache de 1 año
- ✅ **Compresión**: Automática por Firebase
- ✅ **SSL**: HTTPS automático

## Verificar deployment

Después de desplegar, puedes:

1. Visitar las URLs mencionadas arriba
2. Verificar en Firebase Console: https://console.firebase.google.com/project/black-sugar21/hosting
3. Ver analytics y métricas de uso

## Rollback (volver a versión anterior)

Si algo sale mal, puedes ver versiones anteriores:

\`\`\`bash
firebase hosting:channel:list
firebase hosting:clone SOURCE_SITE_ID:SOURCE_CHANNEL_ID TARGET_CHANNEL_ID
\`\`\`

O directamente en Firebase Console > Hosting > Release history

## Dominios personalizados

Para agregar un dominio personalizado (ej: blacksugar21.com):

1. Ve a Firebase Console > Hosting
2. Haz clic en "Add custom domain"
3. Sigue las instrucciones para configurar DNS
4. Firebase manejará automáticamente SSL

## CI/CD (Opcional)

Para deployment automático con GitHub Actions, crea `.github/workflows/firebase-hosting.yml`:

\`\`\`yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build:prod
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '\${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '\${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: black-sugar21
\`\`\`

## Troubleshooting

### Error: "Firebase CLI not found"
\`\`\`bash
npm install -g firebase-tools
\`\`\`

### Error: "Not authorized"
\`\`\`bash
firebase logout
firebase login
\`\`\`

### Error: "Build failed"
Revisa los errores en la consola y verifica que:
- Todas las dependencias estén instaladas
- No haya errores de TypeScript
- Firebase config esté correctamente configurado

## Monitoreo

Después del deployment, puedes monitorear:

- **Performance**: Firebase Console > Performance
- **Analytics**: Firebase Console > Analytics
- **Crashlytics**: Firebase Console > Crashlytics
- **Hosting metrics**: Firebase Console > Hosting

## Costos

Firebase Hosting incluye:
- ✅ 10 GB de almacenamiento gratis
- ✅ 360 MB/día de transferencia gratis
- ✅ SSL gratis
- ✅ CDN global gratis

Para más información: https://firebase.google.com/pricing

## Soporte

Si tienes problemas:
- 📖 [Documentación Firebase Hosting](https://firebase.google.com/docs/hosting)
- 💬 [Stack Overflow](https://stackoverflow.com/questions/tagged/firebase-hosting)
- 🐛 [Firebase Support](https://firebase.google.com/support)
