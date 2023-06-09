import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ClientsModel } from '../models/clients.model';
import { BehaviorSubject, Subscription, filter } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  subscriber!: Subscription;

  constructor(
    private http: HttpClient
  ) {}

  getBackLink() {
    return localStorage.getItem('backLink') || '/clients/list';
  }

  getDetail(id: number) {
    return this.http.get<ClientsModel>('http://localhost:3000/api/clients/' + id);
  }

  getList() {
    return this.http.get<ClientsModel[]>('http://localhost:3000/api/clients');
  }

  create(payload: ClientsModel) {
    return this.http.post<ClientsModel>('http://localhost:3000/api/clients', payload);
  }

  edit(id: number, payload: ClientsModel) {
    return this.http.put<ClientsModel>('http://localhost:3000/api/clients/' + id, payload);
  }
}
