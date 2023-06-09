import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ABMClients_front';

  constructor(private router: Router) {}

  goBack() {
    let arrayPath = this.router.url.split('/');
    if(arrayPath.includes('detail')) arrayPath = arrayPath.slice(1,3);
    if(arrayPath.includes('edit')) arrayPath = [...arrayPath.slice(1,3), '/detail'];
    else
    arrayPath = arrayPath.filter((str: string, i: number) => i !== (arrayPath.length - 1));
    return '/' + arrayPath.join('/');
  }
}
