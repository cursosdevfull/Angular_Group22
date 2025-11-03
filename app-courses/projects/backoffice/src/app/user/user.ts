import { Component } from '@angular/core';
import { Base } from '../core/classes/base';
import { UserType } from './user-type';
import { Metadata } from '../core/types/metadata';
import { UserService } from './user-service';
import { UserForm } from './user-form/user-form';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Container } from '../core/components/container/container';
import { Loader } from '../core/components/loader/loader';
import { Paginator } from '../core/components/paginator/paginator';
import { Table } from '../core/components/table/table';
import { Title } from '../core/components/title/title';
import { Export } from '../core/components/export/export';

@Component({
  selector: 'bo-user',
  imports: [Title, Container, Table, MatTableModule, MatButtonModule, MatIconModule, Paginator, Loader, Export],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User extends Base<UserType> {
  metadata: Metadata = [
    { title: "ID", field: "id" },
    { title: "Username", field: "username" },
    { title: "Email", field: "email" },
    { title: "Role", field: "role" }
  ]

  constructor(protected userService: UserService) {
    super(userService, UserForm)
  }
}
