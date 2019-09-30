import { Component, OnInit } from '@angular/core';
import { kbArticles } from '../../app/kbarticle';
import { GetservicesService } from '../service.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
arr: kbArticles[] = [];
all_articles: any;
artcle: kbArticles[];
page:number =1;
//Page: PagerInfo;
   constructor(private _data: GetservicesService) { }

  ngOnInit() {
this.getArticles();
  }
getArticles() {

this._data.getAllKbArticle().subscribe(

(data: kbArticles[]) => {
this.arr = data;
console.log(this.arr);
this.all_articles = this.arr['kbArticles'];

console.log(this.all_articles);
this.artcle = this.artcle;
console.log(this.artcle);
},
);
    }
  onUserDelete() {
    if (confirm('Do you really want to delete ')) {
      console.log(' delete  here');
    }
  }
}
















