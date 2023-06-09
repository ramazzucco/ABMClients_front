import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/clients'
  },
  {
    path: 'clients',
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
