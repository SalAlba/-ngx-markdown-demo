import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PosteService {

  constructor() { }

  getAllpostes() {
    return [
      {
        title: 'Advice for Applying Machine Learning',
        link: 'advice-for-applying-machine-learning',
        mdURL: 'https://raw.githubusercontent.com/SalAlba/coursera-machine-learning/master/Notes/week6/README.md'
      },
      {
        title: 'Unsupervised Learning',
        link: 'unsupervised-learning',
        mdURL: 'https://raw.githubusercontent.com/SalAlba/coursera-machine-learning/master/Notes/week8/README.md'
      }
    ]
  }

  getPosteByLink(link:string) {
    return this.getAllpostes().find(d => d.link == link);
  }
}
