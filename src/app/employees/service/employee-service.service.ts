import { Injectable } from '@angular/core';
import { Employee } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private employee: Employee[]=[
    {id:'1'
    , name:'shereen'
    ,age: 22
    ,avatar:'https://www.w3schools.com/howto/img_avatar2.png'
    ,adress: ['cairo' , 'london' ,'egypt']
  },
  {id:'2'
    , name:'reham'
    ,age: 26
    ,avatar:'https://www.w3schools.com/w3images/avatar6.png'
    ,adress: ['cairo' , 'london' ,'egypt']
  },
  {id:'3'
    , name:'donia'
    ,age: 20
    ,avatar:'https://www.w3schools.com/w3images/avatar5.png'
    ,adress: ['cairo' , 'shoubra' ,'egypt']
  }
  ];
  constructor() { }
  getAllEmployees(){
    return [...this.employee];
  }

  getEmployeeInfo(employeeid: string){
    return {
      ...this.employee.find(el=>el.id===employeeid)
    };
  }
}
