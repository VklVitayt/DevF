import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http/http.service';
import {User} from '../../models/user';
import {Account} from '../../models/account';


@Component({
  selector: 'app-employee',
  templateUrl: './showEmployee.component.html',
  styleUrls: ['./showEmployee.component.scss']
})
export class ShowEmployeeComponent implements OnInit {
    constructor(private httpService: HttpService) {
    }

    user = new User();
    users: User[];
    account = new Account();
    accounts: Account[];
    findUser = new User();
    findAccount = new Account();
    isEdit: boolean;
    isEdit1: boolean;
    isEdit2: boolean;

    ngOnInit() {
        this.httpService.getAllEmployee('http://localhost:8080/api/user/getAllUser')
            .subscribe(value => {
                    this.users = value;
                },
                error => {
                    console.log(error);
                });
        this.httpService.getAllAccount('http://localhost:8080/api/account/getAllAccount')
            .subscribe(value => {
                    this.accounts = value;
                },
                error => {
                    console.log(error);
                });
    }

    getEmployeeById() {
        this.httpService.getEmployeeById(
            'http://localhost:8080/api/user/getUserById/' + this.user.idEmployee, this.user.idEmployee)
            .subscribe(value => {
                    console.log(value);
                    this.findUser = value;
                },
                error => {
                    console.log(error);
                });
    }

    showEdit() {
        this.isEdit = !this.isEdit;
    }

    showEdit1() {
        this.isEdit1 = !this.isEdit1;
    }

    showEdit2() {
        this.isEdit2 = !this.isEdit2;
    }

    getTotal() {
        let total = 0;
        for (let i = 0; i < this.accounts.length; i++) {
            this.account = this.accounts[i];
            total += this.account.account;
        }
        return total;
    }

    getMax() {
        this.account = this.accounts.sort()[(this.accounts.length) - 1];
        return this.account.account;
    }
}
