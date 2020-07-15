import { CoronaDataService } from './coronadata.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Covid-19';
  countries:any;
  country:any;
  recover:number
  confirm:number
  death:number
  active:number
  chartData=true
  totalConfirmed:any[]=[]
  totalDeath:any[]=[]
  totalRecovered:any[]=[]
  lineChartData:any[]=[{
    data:[10,20,30,40,50,60,70,80,90,100],label:'Covid Label'
  }]
  lineChartType='line'
  lineChartLabels:any[]=[
    //'l1','l2','l3'
  ]

  constructor(private coronaData:CoronaDataService){}

  ngOnInit(): void {
    
    this.coronaData.getCountry().subscribe((countries)=>{
      
      this.countries=countries;
      console.log(countries);
    })
  }
  getCountryName(country:any){
    this.country=country;
    //console.log(this.country.value);
  }
  showCountry(){
    this.coronaData.getCoronaData(this.country).subscribe((data:any[])=>{
      let currentData=data.length-1
      console.log(data.length)
      for(let i=0;i<data.length;i++){
        this.lineChartLabels.push(data[i].Date)
        this.totalConfirmed.push(data[i].Confirmed)
        this.totalDeath.push(data[i].Deaths)
        this.totalRecovered.push(data[i].Recovered)
      }
        
      console.log(this.lineChartLabels)
      this.confirm=data[currentData].Confirmed
      this.death=data[currentData].Deaths
      this.recover=data[currentData].Recovered
      this.active=data[currentData].Active
      this.lineChartData=[
        {
          data:this.totalConfirmed,
          label:'Confirmed'
        },
        {
          data:this.totalDeath,
          label:'Death'
        },
        {
          data:this.totalRecovered,
          label:'Recovered'
        }
      ];
    })    
  }
}
