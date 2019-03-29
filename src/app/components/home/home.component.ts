import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../../services/portfolio.model';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recentProjects: Portfolio[];
  constructor(private portfolioSvc: PortfolioService) { }

  ngOnInit() {
    this.portfolioSvc.get().subscribe(data => {
      this.recentProjects = data.splice(0, 7);
    });
  }

}
