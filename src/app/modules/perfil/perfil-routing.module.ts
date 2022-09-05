import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilPrincipalComponent } from "./perfil-principal/perfil-principal.component";
const routes: Routes = [
  {
    path: 'principal',
    component: PerfilPrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
