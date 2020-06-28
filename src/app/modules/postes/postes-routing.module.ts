import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostesComponent } from './components/postes/postes.component';
import { PosteComponent } from "./components/poste/poste.component";

const routes: Routes = [
  {
    path: '',
    component: PostesComponent,
  },
  {
    path: ':slug',
    component: PosteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostesRoutingModule { }
