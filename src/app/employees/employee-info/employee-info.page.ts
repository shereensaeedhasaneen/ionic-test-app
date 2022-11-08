import { EmployeeServiceService } from './../service/employee-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.page.html',
  styleUrls: ['./employee-info.page.scss'],
})
export class EmployeeInfoPage implements OnInit {

  employee: Employee;
  idFromRoute: string;
  constructor(private activatedRoute: ActivatedRoute
    , private employeeService: EmployeeServiceService) { }

  ngOnInit() {
   this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    console.log(params.get('employeeid'));
    this.idFromRoute=params.get('employeeid');
   /* if(!params.has('employeeid')){
      return;
    }
    this.idFromRoute=params.get('employeeid');*/
    this.employee=this.employeeService.getEmployeeInfo(this.idFromRoute);
  });
  }

}
