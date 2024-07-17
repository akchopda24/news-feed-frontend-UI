import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';  
import { CommonModule, NgFor } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [CommonModule,MatGridListModule,NgxPaginationModule],
  templateUrl: './news-feed.component.html',
  styleUrl: './news-feed.component.scss'
})
export class NewsFeedComponent {

  data:any;
  pageNumber = 1;
  passenger: any; 
  pageSize = 2;
  totalCount : any; 
  pageSizeArr : any = [2,5,10]; 

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getNews(this.pageNumber,this.pageSize,'');
  }

  searchNews(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    var param = '';
    console.log('Input value changed:', newValue);
    if(newValue != null && newValue !=""){
      param += 'searchValue='+ newValue;
    }
   
    this.getNews(1,this.pageSize, param);
  }

  changePageSize(pageSize: any)
  {
    this.getNews(1, Number(pageSize.value), '');
  }
  
  getNews(pageNumber: any, pageSize: any, param: any){
    const newValue =  `&pageNumber=${pageNumber}&pageSize=${pageSize == undefined ? 2 : pageSize}`;
    param = 'api/NewsFeed/search?'+param+newValue;

    this.apiService.get(param).subscribe(response => {
      this.data = response;
      this.totalCount = this.data.totalCount;
      this.pageNumber = this.data.pageNumber;
      this.pageSize = this.data.pageSize;
      console.log(this.data);
    });
  }

}
