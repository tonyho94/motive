import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-post',
  templateUrl: './latest-post.component.html',
  styleUrls: ['./latest-post.component.scss']
})
export class LatestPostComponent {
  latestPosts: any[] = [];

  constructor() {
    this.fetchLatestPosts();
  }

  fetchLatestPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(data => {
        this.latestPosts = data.slice(0, 6);
      })
      .catch(error => console.error(error));
  }
}
