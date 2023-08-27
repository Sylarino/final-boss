import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  constructor() { }

  ngOnInit(): void {
    this.addNews();
  }

  newsList : any[] = [];

  addNews() {
    this.newsList.push({
      title: 'Noticia 2',
      description: 'Lorem ipsum dol',
      img: 'https://picsum.photos/200',
      date: '2021-09-01'
    });
  }

}
