import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { ScrollspyNavLayoutModule } from '@shared/scrollspy-nav-layout/scrollspy-nav-layout.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

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
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
  ],
  declarations: [PostesComponent, PosteComponent],
})
export class PostesModule { }
