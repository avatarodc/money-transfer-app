import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Transaction } from '../models/transaction.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends ApiService {


  constructor(protected override http: HttpClient) {
    super(http);
  }

  getRecentTransactions(limit: number = 10) {
    return this.get(`transactions/recent?limit=${limit}`);
  }

  getTransactionHistory() {
    return this.get('transactions/history');
  }

  getTransactionDetails(id: string) {
    return this.get(`transactions/${id}`);
  }
}
