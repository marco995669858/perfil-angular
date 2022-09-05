import { NgModule } from '@angular/core';

import { PerfilRoutingModule } from './perfil-routing.module';

import { PerfilPrincipalComponent } from "./perfil-principal/perfil-principal.component";
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PerfilPrincipalComponent
  ],
  imports: [
    SharedModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
