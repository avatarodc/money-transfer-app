import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { BalanceCardComponent } from '../balance-card/balance-card.component';
import { QuickActionsComponent } from '../quick-actions/quick-actions.component';
import { RecentTransactionsComponent } from '../recent-transactions/recent-transactions.component';
import { FooterComponent } from '../footer/footer.component';
import { QrCodeComponent } from '../qr-code/qr-code.component';
import {DemandeListComponent} from '../demande/demande-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    // BalanceCardComponent,
    QrCodeComponent,
    QuickActionsComponent,
    RecentTransactionsComponent,
    DemandeListComponent,
    FooterComponent

  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {}
