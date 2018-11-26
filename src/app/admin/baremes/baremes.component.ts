import { Component, OnInit } from '@angular/core';
import { BaremesService } from 'src/app/services/baremes.service';

@Component({
  selector: 'app-baremes',
  templateUrl: './baremes.component.html',
  styleUrls: ['./baremes.component.scss']
})
export class BaremesComponent implements OnInit {

  baremeService ;
  nbBaremes = 18;
  baremes= [];

  constructor(private bs: BaremesService) { 
    this.baremeService = bs;
    console.log("init bareme component")
    this.refreshBaremes();
  }

  refreshBaremes(){
    this.baremeService.getBaremes().subscribe(
      (res: any) => {
        this.baremes = res;
        console.log('baremeComponent ngOnInit res', this.baremes);
      },
      (error: any)=>{
        console.log('baremeComponent ngOnInit error', error);
      }
    )
  }

  onSubmit(event){
    console.log("baremeComponent submit", this.baremes)
    this.baremeService.updateBaremes(this.baremes).subscribe(
      (res: any) => {
        this.baremes = res;
        console.log('baremeComponent ngOnInit res', this.baremes);
      },
      (error: any)=>{
        console.log('baremeComponent ngOnInit error', error);
      }
    )
    
  }

  ngOnInit() {
  }

}
