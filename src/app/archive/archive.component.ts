import { Component, OnInit } from '@angular/core';
import { DiagnosticsService } from '../services/diagnostics.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  diagnosticEmail= "";

  constructor(private ds: DiagnosticsService) {
    this.ds.getDiagnostic("gregory.bannier@gmail.com").subscribe(
      (res: any) => {
        console.log("archive.component.ts res", res)
        this.diagnosticEmail= (res.email_diagnostic);
      }, err =>(console.log("archive.component.ts erreur", err))
  )
  }

  ngOnInit() {
  }

}

// this.bs.getBareme(0).subscribe(
//   (res: any) => {
//     this.actuelTaux= Number(res.valeur_bareme);
//   }
// )