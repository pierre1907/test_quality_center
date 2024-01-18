import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrincipaleComponentComponent } from './components/page-principale-component/page-principale-component.component';
import { PagesApercuComponent } from './pages/pages-apercu/pages-apercu.component';

const routes: Routes = [
  {
    path: '',
    component: PagePrincipaleComponentComponent,
    children: [
      {
        path: '',
        component: PagesApercuComponent 
      },
      {
        path: 'ventes',
        component: PagesApercuComponent 
      },
      {
        path: 'analyse',
        component: PagesApercuComponent 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
