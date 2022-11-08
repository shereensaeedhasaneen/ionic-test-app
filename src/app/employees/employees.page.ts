import { EmployeeServiceService } from './service/employee-service.service';
import { Employee } from './employee.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  employee: Employee[];
  constructor(private router: Router , private employeeService: EmployeeServiceService) { }

  ngOnInit() {
    this.employee=this.employeeService.getAllEmployees();
    console.log(this.employee);
  }

  // routerLink display arrow in list-item
  // but (click) hide arrow in list-item
  goToDetails(id: string){
    console.log(id);
    //this.router.navigateByUrl('/employees/'+id);
    this.router.navigate(['/employees/'+id]);
  }
}
