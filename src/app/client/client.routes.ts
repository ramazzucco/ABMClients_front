import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./pages/list/list.component";
import { CreateComponent } from "./pages/create/create.component";
import { NgModule } from "@angular/core";
import { EditComponent } from "./pages/edit/edit.component";
import { DetailComponent } from "./pages/detail/detail.component";

const  ClientRoutes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: ':id/detail',
        component: DetailComponent
    },
    {
        path: ':id/edit',
        component: EditComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(ClientRoutes)],
    exports: [RouterModule]
})
export class ClientRoutingModule{}