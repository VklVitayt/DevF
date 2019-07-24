import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http/http.service';
import {User} from '../../models/user';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

    users: User[];
    user = new User();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.httpService.getAllEmployee('http://localhost:8080/api/user/getAllUser')
          .subscribe(value => {
                  this.users = value;
              },
          error => {
              console.log(error);
          });
  }

    insertEmployee() {
        this.httpService.insertEmployee('http://localhost:8080/api/user/postUser', this.user)
            .subscribe(value => {
                    console.log(value);
                },
                error => {
                    console.log(error);
                });
    }
}
