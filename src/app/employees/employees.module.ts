import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesRouting } from './employees.routing';
import { FormsModule } from '@angular/forms';
import { EmployeesService } from './employees.service';


@NgModule({
    declarations: [EmployeesListComponent, EmployeesComponent],
    imports: [CommonModule, SharedModule, EmployeesRouting, FormsModule],
    exports: [EmployeesRouting],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [EmployeesService],
})
export class EmployeesModule { }
