import { EmployeeServiceService } from './../service/employee-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.page.html',
  styleUrls: ['./employee-info.page.scss'],
})
export class EmployeeInfoPage implements OnInit {

  employee: Employee;
  idFromRoute: string;
  constructor(
    private router: Router
    ,private activatedRoute: ActivatedRoute
    ,private alertctrl: AlertController
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

  deleteEmployee(){
    this.alertctrl.create({
      header:'You want To delete this person',
      message:'You will delete this employee',
      buttons:[
        {
          text:'No',
          role:'cancel'
          //ممكن نعمل في اي زرار فانكشن الهاندلر عادي
          /*handler:()=>{
            console.log('hi');
            window.location.reload();
          }*/
        },
        {
          text:'Remove',
          handler:()=>{
            console.log('del');
            this.employeeService.deleteEmployeeInfo(this.employee.id);
            this.router.navigateByUrl('/employees');
          }
        }
      ]
    }).then(alertV=>{
      alertV.present(); //this line display alert
    });
  }

}
