import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  selectedArticles: Article[] = [];
  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}

  toggle(a: Article): void {
    console.log('toggle', a);
    if (this.selectedArticles.includes(a)) {
      this.selectedArticles = this.selectedArticles.filter((art) => art !== a);
      return;
    }
    this.selectedArticles.push(a);
  }

  remove(): void {
    console.log('remove');
    this.articleService.remove(this.selectedArticles);
  }
}
