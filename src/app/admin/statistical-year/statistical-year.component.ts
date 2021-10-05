import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-statistical-year',
  templateUrl: './statistical-year.component.html',
  styleUrls: ['./statistical-year.component.css']
})
export class StatisticalYearComponent implements OnInit {

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pageService.setPageActive('statistical-year');
  }

}
