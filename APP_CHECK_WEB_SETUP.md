# Firebase App Check - Configuración Web

## 🔧 Solución Rápida para Error 403 en Desarrollo

### Error que estás viendo:
```
POST https://content-firebaseappcheck.googleapis.com/v1/projects/black-sugar21/apps/1:706595096331:web:0f6b128a0d6988bf20c40e:exchangeDebugToken?key=... 403 (Forbidden)
```

### Causa:
El **debug token** generado automáticamente en localhost no está registrado en Firebase Console.

### Solución Paso a Paso:

#### 1. Copia el Debug Token de la Consola del Navegador
Cuando ejecutas `ng serve`, la consola del navegador muestra:
```
App Check debug token: 9df6279e-a7e0-432e-a1c3-376eaa8cd2da
You will need to add it to your app's App Check settings...
```

**Copia ese token** (en tu caso: `9df6279e-a7e0-432e-a1c3-376eaa8cd2da`)

#### 2. Ve a Firebase Console
```
https://console.firebase.google.com/project/black-sugar21/appcheck/apps
```

#### 3. Encuentra tu App Web
- Busca la app con ID: `1:706595096331:web:0f6b128a0d6988bf20c40e`
- Haz clic en los **3 puntos** (⋮) o en la app misma

#### 4. Manage Debug Tokens
- Selecciona **"Manage debug tokens"**
- Haz clic en **"Add debug token"**
- Pega el token copiado: `9df6279e-a7e0-432e-a1c3-376eaa8cd2da`
- Ponle un nombre descriptivo: `Local Development - Daniel`
- Guarda

#### 5. Recarga tu Navegador
- Recarga `http://localhost:4200/`
- El error 403 debería desaparecer ✅

---

## ⚠️ Problema Detectado en Screenshots Anteriores

En tu captura de pantalla de App Check **no aparece ninguna app web registrada**. Solo ves las APIs de Firebase (Storage, Firestore, etc.) pero falta la sección de **Apps** donde deberías ver tu aplicación web.

## Pasos para Registrar tu App Web en App Check 🚀

### 1. Ir a la Sección Correcta

Ve a la **Consola de Firebase** → **App Check**:
```
https://console.firebase.google.com/project/black-sugar21/appcheck/apps
```

**IMPORTANTE**: Asegúrate de estar en la pestaña **"Apps"** (no en "APIs")

### 2. Buscar tu App Web

Deberías ver una lista de tus aplicaciones:
- ✅ iOS app (App Attest configurado)
- ✅ Android app (Play Integrity configurado)  
- ⚠️ **Web app** (sin configurar)

Si **NO ves ninguna app web listada**, significa que tu proyecto no tiene registrada una app web. Primero debes:

#### Agregar una App Web a Firebase (si no existe)

1. Ve a **Configuración del Proyecto** (ícono ⚙️):
   ```
   https://console.firebase.google.com/project/black-sugar21/settings/general
   ```

2. Scroll hasta la sección **"Tus apps"**

3. Verifica si existe una app web con ID: `1:706595096331:web:0f6b128a0d6988bf20c40e`

4. Si **NO existe**, haz click en **"Agregar app"** → Selecciona el ícono web `</>`

5. Registra tu app:
   - Nombre: `Public-BlackSugar21`
   - Hosting: No (ya que usarás otro hosting)
   - Copia la configuración generada (ya la tienes en `firebase.config.ts`)

### 3. Configurar reCAPTCHA v3 para la App Web

Una vez que tu app web esté registrada en Firebase:

1. Ve nuevamente a **App Check** → **Apps**:
   ```
   https://console.firebase.google.com/project/black-sugar21/appcheck/apps
   ```

2. Deberías ver ahora tu app web listada

3. Haz click en **"Registrar"** o **"Manage"** junto a tu app web

4. Selecciona **"reCAPTCHA v3"** como proveedor

5. Acepta los términos de servicio de reCAPTCHA

6. Firebase generará automáticamente una **Site Key**

7. **Copia la Site Key** que aparece

### 4. Actualizar la Configuración en tu Código

Edita el archivo `src/app/firebase.config.ts`:

```typescript
// Reemplaza esto:
export const recaptchaSiteKey = "PLACEHOLDER_RECAPTCHA_KEY";

// Con tu Site Key real:
export const recaptchaSiteKey = "6Lc...tu_clave_real_aqui...xyz";
```

### 5. Verificar la Configuración

Una vez actualizada la clave, al iniciar tu app web deberías ver en la consola:

```
✅ Firebase App Check inicializado
```

Si la clave no está configurada, verás:
```
⚠️ App Check no configurado - agrega recaptchaSiteKey en firebase.config.ts
```

## ¿Qué Hace App Check? 🔐

Firebase App Check protege tu backend validando que las solicitudes provienen de tu app legítima:

1. **Token de App Check**: 
   - reCAPTCHA v3 genera un token cada vez que tu web hace una solicitud
   - El token se envía automáticamente con cada llamada a Firebase

2. **Validación en Firebase**:
   - Firebase verifica que el token sea válido
   - Rechaza solicitudes sin token o con tokens inválidos

3. **Auto-Refresh**:
   - `isTokenAutoRefreshEnabled: true` mantiene los tokens actualizados
   - Los usuarios no tienen que hacer nada manualmente

## Ventajas de reCAPTCHA v3 ✨

- **Invisible**: No requiere interacción del usuario (sin "click en el semáforo")
- **Automático**: Evalúa continuamente el comportamiento del usuario
- **Score-based**: Asigna una puntuación de riesgo (0.0 = bot, 1.0 = humano)
- **Sin fricción**: Experiencia de usuario fluida

## Configuración de Seguridad en Firebase 🛡️

### Reglas de Firestore con App Check

Puedes forzar App Check en tus reglas de seguridad:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null && 
                            request.app.appCheck.token != null;
    }
  }
}
```

### Métricas en Firebase Console

Monitorea el uso de App Check:
- Solicitudes válidas vs rechazadas
- Apps sin App Check configurado
- Posibles intentos de abuso

## Compatibilidad Multi-Plataforma ✅

| Plataforma | App Check | Proveedor | Estado |
|-----------|-----------|-----------|--------|
| **iOS** | ✅ Configurado | App Attest | Activo |
| **Android** | ✅ Configurado | Play Integrity API | Activo |
| **Web** | ✅ Implementado | reCAPTCHA v3 | Pendiente clave |

## Testing Local 🧪

Para probar en desarrollo sin validación estricta:

1. En Firebase Console > App Check > Settings
2. Agrega dominio a **allowlist**: `localhost`, `127.0.0.1`
3. O usa **Debug tokens** para pruebas locales

### Debug Token para Development

Si necesitas un token de debug para desarrollo local:

```typescript
// Solo en entorno de desarrollo
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

if (window.location.hostname === 'localhost') {
  // @ts-ignore
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}
```

## Próximos Pasos 📋

1. ✅ Código implementado
2. ⏳ Obtener Site Key de reCAPTCHA v3
3. ⏳ Actualizar `firebase.config.ts` con la clave real
4. ⏳ Probar la app y verificar en consola
5. ⏳ Configurar reglas de seguridad en Firestore (opcional)
6. ⏳ Monitorear métricas en Firebase Console

## Recursos Útiles 📚

- [Firebase App Check - Web](https://firebase.google.com/docs/app-check/web/recaptcha-provider)
- [reCAPTCHA v3 Documentation](https://developers.google.com/recaptcha/docs/v3)
- [Firebase App Check Best Practices](https://firebase.google.com/docs/app-check/best-practices)

---

**Nota**: Una vez configurada la clave, no es necesario hacer cambios adicionales en el código. App Check funcionará automáticamente en segundo plano.
