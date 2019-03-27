import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Portfolio } from '../../services/portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  selectedType: 'all' | 'Angular' | 'React' | 'Vue' = 'all';

  portfolios: Portfolio[];
  constructor(private portfolioSvc: PortfolioService) { }

  ngOnInit() {
    this.portfolioSvc.get().subscribe(data => {
      this.portfolios = data;
    });
  }

}
