import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesPage } from './employees.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeesPage
  },
  {
    path: ':employeeid', //النقطتين دول بيفهمه ان دا كدا برامتر
    loadChildren: () => import('./employee-info/employee-info.module').then( m => m.EmployeeInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesPageRoutingModule {}
