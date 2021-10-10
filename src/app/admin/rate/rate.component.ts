import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.setPageActive('rate');
  }

  search(event: any) {
    const fValue = (event.target as HTMLInputElement).value;
    // this.listData.filter = fValue.trim().trim().toLowerCase();
  }

}
