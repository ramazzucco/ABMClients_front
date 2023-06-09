import { Component, OnInit } from '@angular/core';
import { ClientsModel } from 'src/app/models/clients.model';
import { Observable } from 'rxjs';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  clients$!: Observable<ClientsModel[]>

  constructor(
    private router: Router,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.clients$ = this.clientService.getList();
  }

  goToDetail(id: string) {
    this.router.navigate(['clients/' + id + '/detail'])
  }

}
