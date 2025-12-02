import { Injectable, signal } from '@angular/core';

export type Language = 'es' | 'en';

interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLanguage = signal<Language>('es');

  private translations: Translations = {
    // Age Gate
    'age.title': {
      es: 'Black Sugar 21',
      en: 'Black Sugar 21'
    },
    'age.exclusive': {
      es: 'Contenido Exclusivo +18',
      en: 'Exclusive Content +18'
    },
    'age.restricted': {
      es: 'Debes tener 21 años o más para acceder.',
      en: 'You must be 21 or older to access.'
    },
    'age.button': {
      es: 'Tengo 21 años o más',
      en: "I'm 21 or older"
    },
    'age.terms': {
      es: 'Al entrar, aceptas nuestros términos.',
      en: 'By entering, you accept our terms.'
    },

    // Toolbar
    'nav.date': {
      es: 'Date',
      en: 'Date'
    },
    'nav.friends': {
      es: 'Friends',
      en: 'Friends'
    },
    'nav.stories': {
      es: 'Historias',
      en: 'Stories'
    },
    'nav.events': {
      es: 'Eventos',
      en: 'Events'
    },
    'nav.security': {
      es: 'Seguridad',
      en: 'Security'
    },
    'nav.help': {
      es: 'Ayuda',
      en: 'Help'
    },

    // Hero Section
    'hero.title': {
      es: 'BLACK SUGAR 21',
      en: 'BLACK SUGAR 21'
    },
    'hero.tagline': {
      es: 'La red exclusiva +21 para Sugar Mommies y Sugar Babies.',
      en: 'The exclusive +21 network for Sugar Mommies and Sugar Babies.'
    },
    'hero.subtitle': {
      es: 'Donde el lujo encuentra la compañía perfecta.',
      en: 'Where luxury meets the perfect company.'
    },
    'hero.ios': {
      es: 'Descargar en iOS',
      en: 'Download on iOS'
    },
    'hero.android': {
      es: 'Obtener en Android',
      en: 'Get it on Android'
    },

    // Terms Section
    'terms.title': {
      es: 'Términos de Uso',
      en: 'Terms of Use'
    },
    'terms.welcome': {
      es: 'Bienvenido a Black Sugar 21. Al utilizar nuestra aplicación, aceptas cumplir con los siguientes términos:',
      en: 'Welcome to Black Sugar 21. By using our application, you agree to comply with the following terms:'
    },
    'terms.age': {
      es: 'Debes tener al menos 21 años de edad para utilizar esta aplicación.',
      en: 'You must be at least 21 years old to use this application.'
    },
    'terms.content': {
      es: 'El contenido es para uso personal y entretenimiento.',
      en: 'Content is for personal use and entertainment.'
    },
    'terms.respect': {
      es: 'Respeta la privacidad y seguridad de otros usuarios.',
      en: 'Respect the privacy and security of other users.'
    },
    'terms.redistribution': {
      es: 'Queda prohibida la redistribución del contenido.',
      en: 'Content redistribution is prohibited.'
    },
    'terms.violation': {
      es: 'Nos reservamos el derecho de suspender cuentas que violen nuestras normas de comunidad.',
      en: 'We reserve the right to suspend accounts that violate our community standards.'
    },

    // Privacy Section
    'privacy.title': {
      es: 'Políticas de Privacidad',
      en: 'Privacy Policy'
    },
    'privacy.intro': {
      es: 'Tu privacidad es nuestra prioridad. Manejamos tus datos de manera privada y segura.',
      en: 'Your privacy is our priority. We handle your data privately and securely.'
    },
    'privacy.collection': {
      es: 'Recopilación de Datos',
      en: 'Data Collection'
    },
    'privacy.collectionText': {
      es: 'Solo recopilamos los datos necesarios para el funcionamiento de la app (email, edad verificada 21+, preferencias).',
      en: 'We only collect data necessary for app functionality (email, verified age 21+, preferences).'
    },
    'privacy.usage': {
      es: 'Uso de Datos',
      en: 'Data Usage'
    },
    'privacy.usageText': {
      es: 'Tus datos nunca serán vendidos a terceros. Se utilizan exclusivamente para mejorar tu experiencia en Black Sugar 21.',
      en: 'Your data will never be sold to third parties. It is used exclusively to improve your experience on Black Sugar 21.'
    },
    'privacy.security': {
      es: 'Seguridad',
      en: 'Security'
    },
    'privacy.securityText': {
      es: 'Utilizamos encriptación de grado militar para proteger tu información.',
      en: 'We use military-grade encryption to protect your information.'
    },

    // Footer
    'footer.tagline': {
      es: 'Donde el lujo encuentra la compañía perfecta • Solo mayores de 21 años',
      en: 'Where luxury meets the perfect company • 21+ only'
    },
    'footer.home': {
      es: 'Inicio',
      en: 'Home'
    },
    'footer.terms': {
      es: 'Términos',
      en: 'Terms'
    },
    'footer.privacy': {
      es: 'Privacidad',
      en: 'Privacy'
    },
    'footer.support': {
      es: 'Soporte',
      en: 'Support'
    },
    'footer.contact': {
      es: 'Contacto',
      en: 'Contact'
    },
    'footer.copyright': {
      es: '© 2025 Black Sugar 21. Todos los derechos reservados.',
      en: '© 2025 Black Sugar 21. All rights reserved.'
    }
  };

  constructor() {
    this.detectBrowserLanguage();
  }

  private detectBrowserLanguage(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      // Check if user has previously selected a language
      const savedLang = localStorage.getItem('preferredLanguage') as Language;
      if (savedLang) {
        this.currentLanguage.set(savedLang);
        return;
      }

      // Detect browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('es')) {
        this.currentLanguage.set('es');
      } else {
        this.currentLanguage.set('en');
      }
    }
  }

  translate(key: string): string {
    const translation = this.translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[this.currentLanguage()];
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang);
    }
  }

  toggleLanguage(): void {
    const newLang: Language = this.currentLanguage() === 'es' ? 'en' : 'es';
    this.setLanguage(newLang);
  }
}
