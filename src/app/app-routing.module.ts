import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { TemplateComponent } from './plantillas/template/template.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'acercade', component: AcercadeComponent},
  {path: 'template', component: TemplateComponent},

  {path: '**', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
