import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee-service/employee.service';
import { ClientService } from '../../../services/client-service/client.service';
import { Employee } from '../../../models/employee';
import { Client } from '../../../models/client';

@Component({
  selector: 'app-client-edit-form',
  templateUrl: './client-edit-form.component.html',
  styleUrls: ['./client-edit-form.component.scss']
})
export class ClientEditFormComponent implements OnInit {
  @Input() client: Client;
  @Output() listState = new EventEmitter<boolean>();
  @Output() closeState = new EventEmitter<boolean>();
  employees: Employee[];
  errorMessage: boolean;

  constructor(private router: Router, private clientService: ClientService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(
        (res: Employee[]) => this.employees = res,
        (error) => this.router.navigate(['/error'])
      );
  }

  changeBoolean(client) {
    this.listState.emit(client);
  }

  close() {
    this.closeState.emit(true);
  }

  editClient(form) {
    if (form.invalid) {
      this.errorMessage = true;
      return;
    }
    const value = form.value;
    const newClient = new Client;
    newClient.lastname = value.lastname;
    newClient.name = value.name;
    newClient.patronymic = value.patronymic;
    newClient.phone = value.phone;
    newClient.comment = value.comment || null;
    newClient.discount = value.discount || null;
    newClient.doctor = value.doctor || null;

    this.changeBoolean(newClient); // TODO: remove after DB connecting

    /*this.clientService.editClient(this.client)
      .subscribe(
        (res) => this.changeBoolean(),
        (error) => this.router.navigate(['/error'])
      );*/
  }
}
