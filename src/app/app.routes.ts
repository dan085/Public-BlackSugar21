import { Routes } from '@angular/router';
import { ModerationPolicyComponent } from './components/moderation-policy/moderation-policy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

export const routes: Routes = [
  {
    path: 'moderation-policy',
    component: ModerationPolicyComponent,
    title: 'Políticas de Moderación - Black Sugar 21'
  },
  {
    path: 'politicas-moderacion',
    component: ModerationPolicyComponent,
    title: 'Políticas de Moderación - Black Sugar 21'
  },
  {
    path: 'terms',
    component: TermsComponent,
    title: 'Términos de Uso - Black Sugar 21'
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
    title: 'Política de Privacidad - Black Sugar 21'
  }
];
