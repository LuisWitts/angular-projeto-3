import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{HomeComponent}from'./home/home.component';
import{ListagemComponent}from'./listagem/listagem.component';
import{FormularioComponent}from'./formulario/formulario.component';





const routes: Routes = [
{path: '' , component: HomeComponent},
{path: 'home' , component: HomeComponent},
{path: 'listagem' , component: ListagemComponent},
{path: 'novo' , component: FormularioComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
