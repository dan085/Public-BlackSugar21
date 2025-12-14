import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-moderation-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moderation-policy.component.html',
  styleUrls: ['./moderation-policy.component.css']
})
export class ModerationPolicyComponent {
  constructor(public translationService: TranslationService) {}

  t(key: string): string {
    return this.translationService.translate(key);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
