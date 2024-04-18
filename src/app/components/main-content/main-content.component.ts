import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Source } from 'src/app/model/source.entity';
import { ConsumeApiService } from 'src/app/services/consume-api.service';




@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit{
  displayedColumns: string[] = ['category','description', 'id', 'image', 'price', 'rating', 'title'];
  dataSource: MatTableDataSource<any>;

  sources: Array<Source> = [];

  constructor(private consumeService: ConsumeApiService){
    this.dataSource = new MatTableDataSource<any>
  }

  private getAllProducts(): void{
    this.consumeService.getProducts()
    .subscribe((data:any) => {
      console.log(data);
      this.dataSource.data = data;
    });
  }

  ngOnInit(): void{
    this.getAllProducts();
  }
}
