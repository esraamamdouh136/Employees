import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service'
import { NgxPaginationModule } from 'ngx-pagination';
import {AfterViewInit,ElementRef, ViewChild} from '@angular/core';







@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('myDiv') myDiv: ElementRef;

  
  public filterTerm : string;
  public DataJson : any = []  ;
  public p : number ; 
  public From ;
  public TO ;
 
 
 

   
  constructor(public ServiceDataJson : DataServiceService ) { 
  }

  ngOnInit(): void {
     this.ServiceDataJson.getDataJson().subscribe(Respose => this.DataJson = Respose)
      
  }

  // You can check the result in the console. because there is an error (' Cannot read property 'employees' of undefined ' ) 
  // I searched but I did not find any solution
  
  AverageSalary(value1 , value2){
    let Salaryproperty = this.DataJson.data.employees 
    for (var i in Salaryproperty){
     let NewData = []
    if (Salaryproperty[i].firstContractingSalary > value1 && Salaryproperty[i].firstContractingSalary < value2) {
      console.log ('Salary' + Salaryproperty[i].firstContractingSalary )
  
    }
  }
 

}
}
  


    
