import { Component, OnInit } from '@angular/core';
import { DiagnosticsService } from '../services/diagnostics.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  diagnostic: any;

  constructor(private ds: DiagnosticsService) {

  }

  ngOnInit() {
    this.ds.getDiagnostic("gregory.bannier@gmail.com").subscribe(
      (res: any) => {
      
        console.log("archive.component.ts res d", res)
        this.diagnostic= res[0];
      }, err =>(console.log("archive.component.ts erreur", err))
  )
  }

}

// this.bs.getBareme(0).subscribe(
//   (res: any) => {
//     this.actuelTaux= Number(res.valeur_bareme);
//   }
// )