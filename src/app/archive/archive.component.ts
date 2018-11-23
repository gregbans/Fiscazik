import { Component, OnInit } from '@angular/core';
import { DiagnosticsService } from '../services/diagnostics.service';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  diagnostic: any;

  dataStock: any[]= [];

  constructor(private ds: DiagnosticsService, 
              public listingService: ListingService) {
  }

  ngOnInit() {
    this.ds.getDiagnostic("gregory.bannier@gmail.com").subscribe(
      (res: any) => {
      
        console.log("archive.component.ts res d", res)
        this.diagnostic= res[0];
      }, err =>(console.log("archive.component.ts erreur", err))
  )
  this.dataStock = this.listingService.getListing();
  }
  
}

// this.bs.getBareme(0).subscribe(
//   (res: any) => {
//     this.actuelTaux= Number(res.valeur_bareme);
//   }
// )