import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private apiService: ApiService) {}

  getRecentTransactions(limit: number = 10) {
    return this.apiService.get(`transactions/recent?limit=${limit}`);
  }

  getTransactionHistory() {
    return this.apiService.get('transactions/history');
  }

  getTransactionDetails(id: string) {
    return this.apiService.get(`transactions/${id}`);
  }
}
