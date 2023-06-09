import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ClientRoutingModule } from './client.routes';
import { HttpClientModule } from '@angular/common/http'
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './pages/edit/edit.component';
import { DetailComponent } from './pages/detail/detail.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent,
    DetailComponent,
  ],
  providers: [DatePipe],
  imports: [
    CommonModule,
    HttpClientModule,
    ClientRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ClientModule { }
