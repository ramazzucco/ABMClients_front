import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../client.service';
import { Router } from '@angular/router';
import { ClientsModel } from 'src/app/models/clients.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  clientForm!: UntypedFormGroup;

  constructor(
    private router: Router,
    private formbuilder: UntypedFormBuilder,
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
    this. clientForm = this.formbuilder.group({
      firstName: new UntypedFormControl('', Validators.required),
      lastName: new UntypedFormControl('', Validators.required),
      birthday: new UntypedFormControl('', Validators.required),
      CUIT: new UntypedFormControl('', Validators.required),
      address: new UntypedFormControl('', Validators.required),
      phone: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', Validators.required)
    });
  }

  submit() {
    if(this.clientForm.valid) {
      this.clientService.create(this.clientForm.value)
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
}
