import { Component, OnInit } from '@angular/core';
import { BaremesService } from 'src/app/services/baremes.service';

@Component({
  selector: 'app-baremes',
  templateUrl: './baremes.component.html',
  styleUrls: ['./baremes.component.scss']
})
export class BaremesComponent implements OnInit {

  actuelTaux = 0;
  actuelTaux1 = 0;
  actuelTaux2 = 0;
  actuelTaux3 = 0;
  actuelTaux4 = 0;
  actuelTaux5 = 0;
  actuelTaux6 = 0;
  actuelTaux7 = 0;
  actuelTaux8 = 0;
  actuelTaux9 = 0;
  actuelTaux10 = 0;
  actuelTaux11 = 0;
  actuelTaux12 = 0;
  actuelTaux13 = 0;
  actuelTaux14 = 0;
  actuelTaux15 = 0;
  actuelTaux16 = 0;
  actuelTaux17 = 0;



  constructor(private bs: BaremesService) { 
    this.bs.getBareme(0).subscribe(
      (res: any) => {
        this.actuelTaux= Number(res.valeur_bareme);
      })
      this.bs.getBareme(1).subscribe(
        (res: any) => {
          this.actuelTaux1= Number(res.valeur_bareme);
        })
        this.bs.getBareme(2).subscribe(
          (res: any) => {
            this.actuelTaux2= Number(res.valeur_bareme);
          })
          this.bs.getBareme(3).subscribe(
            (res: any) => {
              this.actuelTaux3= Number(res.valeur_bareme);
            })
            this.bs.getBareme(4).subscribe(
              (res: any) => {
                this.actuelTaux4= Number(res.valeur_bareme);
              })
              this.bs.getBareme(5).subscribe(
                (res: any) => {
                  this.actuelTaux5= Number(res.valeur_bareme);
                })
                this.bs.getBareme(6).subscribe(
                  (res: any) => {
                    this.actuelTaux6= Number(res.valeur_bareme);
                  })
                  this.bs.getBareme(7).subscribe(
                    (res: any) => {
                      this.actuelTaux7= Number(res.valeur_bareme);
                    })
                    this.bs.getBareme(8).subscribe(
                      (res: any) => {
                        this.actuelTaux8= Number(res.valeur_bareme);
                      })
                      this.bs.getBareme(9).subscribe(
                        (res: any) => {
                          this.actuelTaux9= Number(res.valeur_bareme);
                        })
                        this.bs.getBareme(10).subscribe(
                          (res: any) => {
                            this.actuelTaux10= Number(res.valeur_bareme);
                          })
                          this.bs.getBareme(11).subscribe(
                            (res: any) => {
                              this.actuelTaux11= Number(res.valeur_bareme);
                            })
                            this.bs.getBareme(12).subscribe(
                              (res: any) => {
                                this.actuelTaux12= Number(res.valeur_bareme);
                              })
                              this.bs.getBareme(13).subscribe(
                                (res: any) => {
                                  this.actuelTaux13= Number(res.valeur_bareme);
                                })
                                this.bs.getBareme(14).subscribe(
                                  (res: any) => {
                                    this.actuelTaux14= Number(res.valeur_bareme);
                                  })
                                  this.bs.getBareme(15).subscribe(
                                    (res: any) => {
                                      this.actuelTaux15= Number(res.valeur_bareme);
                                    })
                                    this.bs.getBareme(16).subscribe(
                                      (res: any) => {
                                        this.actuelTaux16= Number(res.valeur_bareme);
                                      })
                                      this.bs.getBareme(17).subscribe(
                                        (res: any) => {
                                          this.actuelTaux17= Number(res.valeur_bareme);
                                        })
                          
  }

  ngOnInit() {
  }

}
