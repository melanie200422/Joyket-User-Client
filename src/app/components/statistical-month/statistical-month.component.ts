import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-statistical-month',
  templateUrl: './statistical-month.component.html',
  styleUrls: ['./statistical-month.component.css']
})
export class StatisticalMonthComponent implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.setPageActive('statistical-month');
  }

}
