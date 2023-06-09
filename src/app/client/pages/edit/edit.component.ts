import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../client.service';
import { ClientsModel } from 'src/app/models/clients.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id!: number;
  clientForm: UntypedFormGroup = this.formbuilder.group({
    firstName: new UntypedFormControl('', Validators.required),
    lastName: new UntypedFormControl('', Validators.required),
    birthday: new UntypedFormControl('', Validators.required),
    CUIT: new UntypedFormControl('', Validators.required),
    address: new UntypedFormControl('', Validators.required),
    phone: new UntypedFormControl('', Validators.required),
    email: new UntypedFormControl('', Validators.required)
  });
  clientObject!: ClientsModel;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formbuilder: UntypedFormBuilder,
    private clientService: ClientService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = Number(params['id']);
      this.clientService.getDetail(Number(params['id']))
        .subscribe({
          next: (res: ClientsModel) => {
            this.fillForm(res);
            this.clientObject = res;
          }
        })
    })
  }

  fillForm(client: ClientsModel) {
    this. clientForm = this.formbuilder.group({
      firstName: new UntypedFormControl(client.firstName, Validators.required),
      lastName: new UntypedFormControl(client.lastName, Validators.required),
      birthday: new UntypedFormControl(this.datePipe.transform(client.birthday, 'yyyy-MM-dd'), Validators.required),
      CUIT: new UntypedFormControl(client.CUIT, Validators.required),
      address: new UntypedFormControl(client.address, Validators.required),
      phone: new UntypedFormControl(client.phone, Validators.required),
      email: new UntypedFormControl(client.email, Validators.required)
    });
  }

  submit() {
    if(this.clientForm.valid) {
      this.clientService.edit(this.id, this.clientForm.value)
        .subscribe({
          next: (res: ClientsModel) => {
            console.log(res);
            this.router.navigate(['/clients/list']);
          },
          error: (error: any) => {
            console.log(error)
          }
        })
    }
  }

  reset() {
    this.fillForm(this.clientObject);
  }

}
