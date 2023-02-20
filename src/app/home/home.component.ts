import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  headerCols: number = 2;
  chooseCols: number = 4;
  processCols: number = 3;
  statisticsCols: number = 4;
  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth < 599) {
      this.headerCols = 1;
      this.chooseCols = 1;
      this.processCols = 1;
      this.statisticsCols = 1;
    }
    else if (window.innerWidth > 599 && window.innerWidth < 900) {
      this.headerCols = 1;
      this.chooseCols = 2;
      this.processCols = 3;
      this.statisticsCols = 2;
    }
    else {
      this.headerCols = 2;
      this.chooseCols = 4;
      this.processCols = 3;
      this.statisticsCols = 4;
    }
  }
  onResize(event: UIEvent) {
    if ((<Window>event.target).innerWidth < 599) {
      this.headerCols = 1;
      this.chooseCols = 1;
      this.processCols = 1;
      this.statisticsCols = 1;
    }
    else if ((<Window>event.target).innerWidth > 599 && (<Window>event.target).innerWidth < 900) {
      this.headerCols = 1;
      this.chooseCols = 2;
      this.processCols = 3;
      this.statisticsCols = 2;
    }
    else {
      this.headerCols = 2;
      this.chooseCols = 4;
      this.processCols = 3;
      this.statisticsCols = 4;
    }
  }

}
