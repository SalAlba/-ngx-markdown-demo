import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';

// services ...
import { PosteService } from '@shared/providers/poste.service';

// models ...
import { Post } from '@shared/models/post';


@Component({
  selector: 'app-poste',
  templateUrl: './poste.component.html',
  styleUrls: ['./poste.component.css']
})
export class PosteComponent implements OnInit {
  headings: Element[];
  post: Post;
  // post_: Observable<Post>;
  // rawPostURL = '';

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private route: ActivatedRoute,
    private postesService: PosteService,
    // private title: Title,
    // private meta: Meta
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      urlParams => this.postesService.getPosteByLink(urlParams.slug).subscribe(
        data => {
          this.post = data['post'];
        },
        error => console.log('Post error : ', error)
      )
    );
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
  }

  onError(e: any) {
    console.log('>>>>>>>>> ', e)
  }

}
