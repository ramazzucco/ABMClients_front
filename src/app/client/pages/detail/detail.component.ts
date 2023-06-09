import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientsModel } from 'src/app/models/clients.model';
import { ClientService } from '../../client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id!: string;
  client$!: Observable<ClientsModel>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = params.id;
      this.client$ = this.clientService.getDetail(Number(params.id))
    })
  }

}
