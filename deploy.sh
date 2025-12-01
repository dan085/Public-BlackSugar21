#!/bin/bash

# Script de deployment para Black Sugar 21
# Este script construye y despliega la aplicación en Firebase Hosting

echo "🚀 Iniciando proceso de deployment de Black Sugar 21..."

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Verificar si Firebase CLI está instalado
if ! command -v firebase &> /dev/null
then
    echo "${YELLOW}⚠️  Firebase CLI no está instalado.${NC}"
    echo "${BLUE}📦 Instalando Firebase CLI...${NC}"
    npm install -g firebase-tools
fi

# Verificar login en Firebase
echo "${BLUE}🔐 Verificando autenticación de Firebase...${NC}"
if ! firebase projects:list &> /dev/null
then
    echo "${YELLOW}⚠️  No estás autenticado en Firebase.${NC}"
    echo "${BLUE}🔑 Por favor, inicia sesión:${NC}"
    firebase login
fi

# Construir la aplicación para producción
echo "${BLUE}🔨 Construyendo aplicación para producción...${NC}"
npm run build:prod

if [ $? -eq 0 ]; then
    echo "${GREEN}✅ Build completado exitosamente${NC}"
else
    echo "${YELLOW}❌ Error en el build. Por favor revisa los errores.${NC}"
    exit 1
fi

# Desplegar en Firebase Hosting
echo "${BLUE}🚀 Desplegando en Firebase Hosting...${NC}"
firebase deploy --only hosting

if [ $? -eq 0 ]; then
    echo "${GREEN}✅ ¡Deployment completado exitosamente!${NC}"
    echo "${GREEN}🌐 Tu aplicación está disponible en: https://black-sugar21.web.app${NC}"
    echo "${GREEN}🌐 También en: https://black-sugar21.firebaseapp.com${NC}"
else
    echo "${YELLOW}❌ Error en el deployment. Por favor revisa los errores.${NC}"
    exit 1
fi
