import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';

// services ...
import { PosteService } from '@shared/providers/poste.service';

// models ...
import { Post } from "@shared/models/post";

@Component({
  selector: 'app-postes',
  templateUrl: './postes.component.html',
  styleUrls: ['./postes.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostesComponent implements OnInit {

  headings: Element[];
  postes: Post[];

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private postesService: PosteService,
  ) {
  }

  ngOnInit(): void {
    this.postesService.getAllpostes().subscribe(d => this.postes = d['posts']);
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


  getBannerImage(poste: Post) {
    return poste.rawPostURL.replace('README.md', poste.banner.replace('.', ''))
  }
}
