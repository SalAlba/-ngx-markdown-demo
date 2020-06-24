import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';

// services ...
import { PosteService } from '../../../../shared/providers/poste.service';

// import { Post } from '../../../../shared/models/post.model';
// import { DESCRITPTION } from '../../../../shared/mock/mock-desc';

@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})
export class PosteComponent implements OnInit {
  headings: Element[];
  // post: Observable<any>;
  post = {};
  mdURL = '';

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private route: ActivatedRoute,
    private postesService: PosteService,
    // private title: Title,
    // private meta: Meta
  ) { }

  ngOnInit() {
    this.route.params.subscribe(d => this.mdURL = this.postesService.getPosteByLink(d.link).mdURL );
    // this.route.params.subscribe(d => this.post = this.postesService.get_postes_by_link(d.link));

    // this.post.subscribe(d => {
    //   this.title.setTitle(d.title);
    //   this.meta.addTag({
    //     name: 'description',
    //     content: DESCRITPTION
    //     // content: d.description
    //   });
    // });

  }

  onLoad() {
    this.stripContent();
    this.setHeadings();
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
  } F

}
