import { Component, OnInit } from '@angular/core';
// on import le ListingService
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-tuto',
  templateUrl: './tuto.component.html',
  styleUrls: ['./tuto.component.scss']
})
export class TutoComponent implements OnInit {

  SuperTotal:Number;

  constructor(private listingService: ListingService) { 
    this.SuperTotal = listingService.SuperTotal;
  }

  ngOnInit() {
  }

}
