import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientsModel } from '../models/clients.model';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  subscriber!: Subscription;

  constructor(
    private http: HttpClient
  ) {}

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
