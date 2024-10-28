import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { BalanceCardComponent } from '../balance-card/balance-card.component';
import { QuickActionsComponent } from '../quick-actions/quick-actions.component';
import { RecentTransactionsComponent } from '../recent-transactions/recent-transactions.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    BalanceCardComponent,
    QuickActionsComponent,
    RecentTransactionsComponent,
    FooterComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {}
