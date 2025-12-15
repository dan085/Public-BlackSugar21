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
      es: 'Inicio',
      en: 'Home'
    },
    'nav.terms': {
      es: 'Términos de Uso',
      en: 'Terms of Use'
    },
    'nav.privacy': {
      es: 'Políticas de Privacidad',
      en: 'Privacy Policy'
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
    },
    'footer.moderation': {
      es: 'Moderación',
      en: 'Moderation'
    },

    // Moderation Policy
    'moderation.title': {
      es: 'Políticas de Moderación y Comunidad',
      en: 'Moderation and Community Policies'
    },
    'moderation.subtitle': {
      es: 'Garantizando un ambiente seguro y respetuoso para todos',
      en: 'Ensuring a safe and respectful environment for everyone'
    },
    'moderation.intro.title': {
      es: 'Nuestro Compromiso con la Seguridad',
      en: 'Our Commitment to Safety'
    },
    'moderation.intro.text': {
      es: 'En Black Sugar 21, la seguridad y el respeto son fundamentales. Hemos implementado un sistema avanzado de moderación con inteligencia artificial que funciona 24/7 para mantener nuestra comunidad segura, respetuosa y acogedora para todos los usuarios.',
      en: 'At Black Sugar 21, safety and respect are fundamental. We have implemented an advanced AI-powered moderation system that works 24/7 to keep our community safe, respectful, and welcoming for all users.'
    },
    'moderation.ai.title': {
      es: 'Detección Automática con Inteligencia Artificial',
      en: 'Automatic Detection with Artificial Intelligence'
    },
    'moderation.ai.text1': {
      es: 'Nuestro sistema utiliza Google Gemini AI para analizar todos los mensajes en tiempo real, detectando automáticamente:',
      en: 'Our system uses Google Gemini AI to analyze all messages in real-time, automatically detecting:'
    },
    'moderation.ai.detection1': {
      es: '🚫 Contenido ofensivo, insultos o lenguaje vulgar',
      en: '🚫 Offensive content, insults, or vulgar language'
    },
    'moderation.ai.detection2': {
      es: '🚨 Acoso, intimidación o amenazas',
      en: '🚨 Harassment, bullying, or threats'
    },
    'moderation.ai.detection3': {
      es: '💬 Spam o mensajes repetitivos',
      en: '💬 Spam or repetitive messages'
    },
    'moderation.ai.detection4': {
      es: '⚠️ Comportamiento inadecuado o solicitudes inapropiadas',
      en: '⚠️ Inappropriate behavior or requests'
    },
    'moderation.ai.detection5': {
      es: '🔞 Contenido sexual explícito no consensuado',
      en: '🔞 Non-consensual explicit sexual content'
    },
    'moderation.ai.privacy': {
      es: '🔒 Tu privacidad está protegida: El análisis es automático, privado y no es revisado por humanos a menos que se reporte un incidente.',
      en: '🔒 Your privacy is protected: Analysis is automatic, private, and not reviewed by humans unless an incident is reported.'
    },
    'moderation.penalty.title': {
      es: 'Sistema de Penalización Progresiva',
      en: 'Progressive Penalty System'
    },
    'moderation.penalty.text': {
      es: 'Cada vez que se detecta contenido ofensivo, se asigna una puntuación al usuario basada en la gravedad:',
      en: 'Each time offensive content is detected, a score is assigned to the user based on severity:'
    },
    'moderation.penalty.level1.title': {
      es: 'Nivel Bajo (+1 punto)',
      en: 'Low Level (+1 point)'
    },
    'moderation.penalty.level1.desc': {
      es: 'Lenguaje levemente inapropiado o comentarios desconsiderados',
      en: 'Slightly inappropriate language or inconsiderate comments'
    },
    'moderation.penalty.level1.impact': {
      es: 'Impacto: Advertencia automática, mínima reducción de visibilidad',
      en: 'Impact: Automatic warning, minimal visibility reduction'
    },
    'moderation.penalty.level2.title': {
      es: 'Nivel Medio (+3 puntos)',
      en: 'Medium Level (+3 points)'
    },
    'moderation.penalty.level2.desc': {
      es: 'Insultos directos, acoso verbal o spam persistente',
      en: 'Direct insults, verbal harassment, or persistent spam'
    },
    'moderation.penalty.level2.impact': {
      es: 'Impacto: Reducción notable de visibilidad en el matching',
      en: 'Impact: Noticeable visibility reduction in matching'
    },
    'moderation.penalty.level3.title': {
      es: 'Nivel Alto (+5 puntos)',
      en: 'High Level (+5 points)'
    },
    'moderation.penalty.level3.desc': {
      es: 'Amenazas, acoso grave, contenido extremadamente ofensivo',
      en: 'Threats, severe harassment, extremely offensive content'
    },
    'moderation.penalty.level3.impact': {
      es: 'Impacto: Reducción severa de visibilidad, posible suspensión temporal',
      en: 'Impact: Severe visibility reduction, possible temporary suspension'
    },
    'moderation.penalty.recovery': {
      es: '💡 Consejo: Tu puntuación se reduce automáticamente un 20% cada 30 días de buen comportamiento.',
      en: '💡 Tip: Your score automatically decreases by 20% every 30 days of good behavior.'
    },
    'moderation.visibility.title': {
      es: 'Cómo Afecta la Visibilidad',
      en: 'How Visibility is Affected'
    },
    'moderation.visibility.text': {
      es: 'Los usuarios con historial de comportamiento ofensivo experimentan una reducción probabilística en su visibilidad:',
      en: 'Users with a history of offensive behavior experience a probabilistic reduction in their visibility:'
    },
    'moderation.visibility.effect1': {
      es: '📉 Aparecen con menor frecuencia en las recomendaciones de otros usuarios',
      en: '📉 Appear less frequently in other users\' recommendations'
    },
    'moderation.visibility.effect2': {
      es: '🎯 El sistema prioriza perfiles con buen comportamiento',
      en: '🎯 The system prioritizes profiles with good behavior'
    },
    'moderation.visibility.effect3': {
      es: '⏳ La penalización puede alcanzar hasta 95% de reducción en casos graves',
      en: '⏳ The penalty can reach up to 95% visibility reduction in severe cases'
    },
    'moderation.visibility.fairness': {
      es: '✨ Sistema justo: Las penalizaciones son temporales y se recuperan con buen comportamiento.',
      en: '✨ Fair system: Penalties are temporary and recover with good behavior.'
    },
    'moderation.decay.title': {
      es: 'Sistema de Recuperación Automática',
      en: 'Automatic Recovery System'
    },
    'moderation.decay.text': {
      es: 'Creemos en las segundas oportunidades. Nuestro sistema automáticamente reduce las penalizaciones:',
      en: 'We believe in second chances. Our system automatically reduces penalties:'
    },
    'moderation.decay.rate': {
      es: '📅 Cada 30 días, tu puntuación de ofensas se reduce en un 20%',
      en: '📅 Every 30 days, your offense score is reduced by 20%'
    },
    'moderation.decay.automatic': {
      es: '🔄 El proceso es completamente automático, no requiere solicitud',
      en: '🔄 The process is completely automatic, no request needed'
    },
    'moderation.decay.encourage': {
      es: '🌟 Fomentamos el cambio positivo y el comportamiento respetuoso',
      en: '🌟 We encourage positive change and respectful behavior'
    },
    'moderation.community.title': {
      es: 'Normas de la Comunidad',
      en: 'Community Guidelines'
    },
    'moderation.community.rule1': {
      es: '✅ Trata a todos con respeto y cortesía, como te gustaría ser tratado',
      en: '✅ Treat everyone with respect and courtesy, as you would like to be treated'
    },
    'moderation.community.rule2': {
      es: '✅ Mantén conversaciones apropiadas y consensuadas',
      en: '✅ Keep conversations appropriate and consensual'
    },
    'moderation.community.rule3': {
      es: '✅ Respeta los límites y preferencias de otros usuarios',
      en: '✅ Respect the boundaries and preferences of other users'
    },
    'moderation.community.rule4': {
      es: '✅ Reporta cualquier comportamiento inapropiado que observes',
      en: '✅ Report any inappropriate behavior you observe'
    },
    'moderation.community.rule5': {
      es: '✅ Sé auténtico y honesto en tu perfil e interacciones',
      en: '✅ Be authentic and honest in your profile and interactions'
    },
    'moderation.report.title': {
      es: 'Sistema de Reportes',
      en: 'Report System'
    },
    'moderation.report.text': {
      es: 'Si experimentas o presencias comportamiento inapropiado, puedes reportarlo fácilmente:',
      en: 'If you experience or witness inappropriate behavior, you can easily report it:'
    },
    'moderation.report.option1': {
      es: '📱 Desde cualquier conversación, toca el menú (⋮) y selecciona "Reportar Usuario"',
      en: '📱 From any conversation, tap the menu (⋮) and select "Report User"'
    },
    'moderation.report.option2': {
      es: '🎯 Selecciona la razón específica: Contenido inapropiado, spam, acoso, perfil falso u ofensivo',
      en: '🎯 Select the specific reason: Inappropriate content, spam, harassment, fake profile, or offensive'
    },
    'moderation.report.option3': {
      es: '⚡ El reporte se procesa inmediatamente y de forma confidencial',
      en: '⚡ The report is processed immediately and confidentially'
    },
    'moderation.report.option4': {
      es: '🛡️ Puedes bloquear al usuario para evitar futuras interacciones',
      en: '🛡️ You can block the user to prevent future interactions'
    },
    'moderation.report.option5': {
      es: '👥 Nuestro equipo revisa todos los reportes y toma acciones apropiadas',
      en: '👥 Our team reviews all reports and takes appropriate action'
    },
    'moderation.report.confidential': {
      es: '🔐 Todos los reportes son confidenciales y el usuario reportado no sabrá quién lo reportó.',
      en: '🔐 All reports are confidential and the reported user will not know who reported them.'
    },
    'moderation.privacy.title': {
      es: 'Privacidad y Protección de Datos',
      en: 'Privacy and Data Protection'
    },
    'moderation.privacy.text1': {
      es: 'Tu privacidad es fundamental en nuestro sistema de moderación:',
      en: 'Your privacy is fundamental in our moderation system:'
    },
    'moderation.privacy.point1': {
      es: '🔒 Los mensajes se analizan de forma automática y privada por IA',
      en: '🔒 Messages are analyzed automatically and privately by AI'
    },
    'moderation.privacy.point2': {
      es: '👤 No hay revisión humana a menos que se reporte un incidente',
      en: '👤 No human review unless an incident is reported'
    },
    'moderation.privacy.point3': {
      es: '🗑️ Los datos de moderación se eliminan según nuestra política de retención',
      en: '🗑️ Moderation data is deleted according to our retention policy'
    },
    'moderation.privacy.point4': {
      es: '🛡️ Cumplimos con todas las regulaciones de privacidad y protección de datos',
      en: '🛡️ We comply with all privacy and data protection regulations'
    },
    'moderation.commitment.title': {
      es: 'Nuestro Compromiso Contigo',
      en: 'Our Commitment to You'
    },
    'moderation.commitment.text': {
      es: 'En Black Sugar 21, estamos comprometidos a proporcionar una plataforma segura, respetuosa y acogedora donde todos puedan conectar con confianza. Nuestro sistema de moderación trabaja continuamente para proteger a nuestra comunidad mientras respeta tu privacidad.',
      en: 'At Black Sugar 21, we are committed to providing a safe, respectful, and welcoming platform where everyone can connect with confidence. Our moderation system works continuously to protect our community while respecting your privacy.'
    },
    'moderation.commitment.button': {
      es: 'Volver al Inicio',
      en: 'Back to Home'
    },
    'moderation.footer.updated': {
      es: 'Última actualización: Diciembre 2025',
      en: 'Last updated: December 2025'
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
