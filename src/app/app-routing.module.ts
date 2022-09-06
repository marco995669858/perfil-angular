import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilPrincipalComponent } from './modules/perfil/perfil-principal/perfil-principal.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'perfil/principal',
    pathMatch: 'full'
  },
  {
    path:'perfil',
    component:PerfilPrincipalComponent,
     children:[
      {
        path:'principal',
        loadChildren: () =>
          import('./modules/perfil/perfil.module').then((m) => m.PerfilModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
