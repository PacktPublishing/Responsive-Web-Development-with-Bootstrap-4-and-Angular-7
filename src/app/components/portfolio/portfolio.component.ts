import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Portfolio } from '../../services/portfolio.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  types: string[];
  private _selectedType = 'all';

  get selectedType() {
    return this._selectedType;
  }

  set selectedType(newValue: string) {
    if (newValue !== this._selectedType) {
      this._selectedType = newValue;
      this.loadPortfolios(this._selectedType);
    }
  }

  rooms = ['Room 1', 'Living Room', 'Kitchen', 'Bathroom'];

  portfolios: Portfolio[];
  constructor(private portfolioSvc: PortfolioService) { }

  ngOnInit() {
    this.loadPortfolios(this._selectedType);
  }

  loadPortfolios(selectedType: string): void {
    this.portfolioSvc.get().subscribe(data => {
      this.types = data.map(p => p.type).filter((value, index, self) => self.indexOf(value) === index);
      this.portfolios = data.filter(p => p.type === selectedType || selectedType === 'all');
    });
  }

}
