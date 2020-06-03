import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  public users = [];
  constructor(private employee: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.employee.getEmployee();
    this.employee.getUsers().subscribe((data) => (this.users = data));
  }
}
