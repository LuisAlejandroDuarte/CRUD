import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './forms/persona/crear/crear.component';
import { ListComponent } from './forms/persona/list/list.component';


const routes: Routes = [
  {path: '', redirectTo: 'persona',pathMatch: 'full'},
  { path: 'persona', component: ListComponent },
  { path: 'crear-persona', component: CrearComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
