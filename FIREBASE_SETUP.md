# Configuración de Firebase para Black Sugar 21

## Pasos para conectar tu proyecto con Firebase:

### 1. Crear un proyecto en Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en "Agregar proyecto" o "Add project"
3. Nombra tu proyecto (ej: "black-sugar-21")
4. Acepta los términos y continúa
5. (Opcional) Habilita Google Analytics
6. Haz clic en "Crear proyecto"

### 2. Configurar Authentication

1. En el menú lateral, ve a **Build > Authentication**
2. Haz clic en "Get started" o "Comenzar"
3. Habilita los métodos de autenticación que desees:
   - **Email/Password** (recomendado)
   - **Google** (opcional pero recomendado)
4. Guarda los cambios

### 3. Configurar Firestore Database

1. En el menú lateral, ve a **Build > Firestore Database**
2. Haz clic en "Create database" o "Crear base de datos"
3. Selecciona el modo:
   - **Test mode** (para desarrollo - permite acceso temporal)
   - **Production mode** (recomendado - requiere reglas de seguridad)
4. Selecciona la ubicación del servidor (elige la más cercana a tus usuarios)
5. Haz clic en "Enable" o "Habilitar"

### 4. Configurar reglas de seguridad de Firestore

Ve a la pestaña "Rules" y pega estas reglas básicas:

\`\`\`
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Regla para la colección de usuarios
    match /users/{userId} {
      // Los usuarios solo pueden leer/escribir sus propios datos
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Regla por defecto: denegar todo
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
\`\`\`

### 5. Obtener la configuración de Firebase

1. En el menú lateral, haz clic en el ícono de engranaje ⚙️ junto a "Project Overview"
2. Selecciona "Project settings" o "Configuración del proyecto"
3. Desplázate hacia abajo hasta la sección "Your apps" o "Tus apps"
4. Haz clic en el ícono de la web **</>** para registrar una aplicación web
5. Dale un nombre a tu app (ej: "Black Sugar 21 Web")
6. (Opcional) Habilita Firebase Hosting si lo deseas
7. Copia el objeto de configuración que aparece

### 6. Configurar tu aplicación

1. Abre el archivo \`src/app/firebase.config.ts\`
2. Reemplaza los valores del objeto \`firebaseConfig\` con los de tu proyecto:

\`\`\`typescript
export const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123",
  measurementId: "G-ABC123XYZ"
};
\`\`\`

### 7. Estructura de datos en Firestore

La aplicación creará automáticamente esta estructura:

\`\`\`
users/
  {userId}/
    - uid: string
    - email: string
    - displayName: string
    - photoURL: string (opcional)
    - age: number (opcional)
    - ageVerified: boolean
    - ageVerifiedAt: timestamp
    - preferences:
        - language: "es" | "en"
    - createdAt: timestamp
    - lastLogin: timestamp
\`\`\`

### 8. Funcionalidades sincronizadas con Firebase

✅ **Autenticación de usuarios**
- Registro con email/password
- Login con email/password
- Login con Google
- Gestión de sesiones

✅ **Perfil de usuario**
- Información personal
- Preferencias de idioma (sincronizado automáticamente)
- Verificación de edad

✅ **Sincronización en tiempo real**
- Las preferencias de idioma se sincronizan automáticamente
- Los datos persisten entre dispositivos

## Seguridad

- Los datos de usuario solo son accesibles por el usuario autenticado
- La verificación de edad se guarda en Firebase
- Las preferencias se sincronizan de forma segura

## Próximos pasos opcionales

1. **Habilitar Storage** para almacenar fotos de perfil
2. **Configurar Cloud Functions** para lógica del servidor
3. **Agregar Analytics** para seguimiento de usuarios
4. **Configurar Remote Config** para features flags

## Soporte

Si necesitas ayuda, consulta la [documentación oficial de Firebase](https://firebase.google.com/docs)
