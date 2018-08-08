import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesRouting } from './employees.routing';


@NgModule({
    declarations: [EmployeesListComponent, EmployeesComponent, EmployeesListComponent],
    imports: [CommonModule, SharedModule, EmployeesRouting],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
})
export class EmployeesModule { }
