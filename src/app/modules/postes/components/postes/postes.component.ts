import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

// services ...
import { PosteService } from '../../../../shared/providers/poste.service';

@Component({
  selector: 'app-postes',
  templateUrl: './postes.component.html',
  styleUrls: ['./postes.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostesComponent {

  headings: Element[];
  postes;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private postesService: PosteService,
  ) {
    this.postes = postesService.getAllpostes()
   }

  onLoad() {
    // this.stripContent();
    // this.setHeadings();
  }

  private setHeadings() {
    const headings = [];
    this.elementRef.nativeElement
      .querySelectorAll('h2')
      .forEach(x => headings.push(x));
    this.headings = headings;
  }

  private stripContent() {
    this.elementRef.nativeElement
      .querySelector('markdown')
      .querySelectorAll('markdown > p:nth-child(-n + 2), #ngx-markdown, #table-of-contents + ul, #table-of-contents')
      .forEach(x => x.remove());
  }
}
