import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

import { Post } from "@shared/models/post";

@Injectable({
  providedIn: 'root'
})
export class PosteService {
  private apiPrefix = 'posts';

  constructor(
    private http: HttpClient
  ) { }

  getAllpostes() {
    // return [
    //   {
    //     "title": "Machine Learning Project Checklist",
    //     "slug": "machine-learning-project-checklist",
    //     "rawPostURL": "https://raw.githubusercontent.com/SalAlba/machine-learning/master/notes/machine-learning-project-checklist/README.md",
    //     "published": true,
    //     "banner": "./images/Machine-Learning-Checklist.jpg"
    //   }
    // ]

    return this.http.get<Post[]>(`${environment.apiUrl}/${this.apiPrefix}`);
  }

  getPosteByLink(slug: string) {
    return this.http.get<Post>(`${environment.apiUrl}/${this.apiPrefix}/link/${slug}`)
  }
}
