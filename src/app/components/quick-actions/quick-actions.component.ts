import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuickActionsComponent {
  actions = [
    { icon: 'group', label: 'Contacts' },
    { icon: 'account_balance_wallet', label: 'Portefeuilles' },
    { icon: 'history', label: 'Historique' },
    { icon: 'settings', label: 'Paramètres' }
  ];

  trackByLabel(index: number, action: any): string {
    return action.label;
  }
}
