import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { ScrollspyNavLayoutModule } from '@shared/scrollspy-nav-layout/scrollspy-nav-layout.module';

// module ...
import { PostesRoutingModule } from './postes-routing.module';
import { SharedModule } from '@shared/shared.module';

// components ...
import { PostesComponent } from './components/postes/postes.component';
import { PosteComponent } from "./components/poste/poste.component";

@NgModule({
  imports: [
    PostesRoutingModule,
    MarkdownModule.forChild(),
    ScrollspyNavLayoutModule,
    SharedModule,
  ],
  declarations: [PostesComponent, PosteComponent],
})
export class PostesModule { }
