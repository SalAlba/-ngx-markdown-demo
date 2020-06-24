import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { ScrollspyNavLayoutModule } from '@shared/scrollspy-nav-layout/scrollspy-nav-layout.module';


// modules ...
import { PostesRoutingModule } from './postes-routing.module';
import { SharedModule } from '@shared/shared.module';
// import { MarkdownModule } from 'ngx-markdown';


// components ...
import { PostesComponent } from './components/postes/postes.component';
import { PosteComponent } from './components/poste/poste.component';



@NgModule({
  declarations: [PostesComponent, PosteComponent],
  imports: [
    CommonModule,
    PostesRoutingModule,
    MarkdownModule.forChild(),
    ScrollspyNavLayoutModule,
    SharedModule,
    // MarkdownModule.forChild({ loader: HttpClient })
    // MarkdownModule.forChild()
  ]
})
export class PostesModule { }
