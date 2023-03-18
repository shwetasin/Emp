import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/local-stroage.service';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.page.html',
  styleUrls: ['./emp-data.page.scss'],
})
export class EmpDataPage implements OnInit {
  editForm: FormGroup;
  employeeData: any[] = [];
  holder: any[] = [];
  formSubmitted: boolean = false;
  loginemail: any;
  id: string | null;
  userlist: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private localStorage: LocalService,
    private apiService: ApiService
  ) {

    this.editForm = new FormGroup({
      firstName: new FormControl('', Validators.compose([Validators.required])),
      lastName:new FormControl (''),
      email: new FormControl('',),
      phone: new FormControl('',),

    });

    console.log(typeof (this.editForm));
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit() {
    this.singleuser();
  }

  singleuser() {
    this.apiService.getData('https://dummyjson.com/users/' + this.id).subscribe({
      next: (res: any) => {
        if (res != null) {
          console.log("Response:", res);
          this.userlist = res;
          this.editForm.controls['firstName'].setValue(this.userlist.firstName);
          this.editForm.controls['lastName'].setValue(this.userlist.lastName);
          this.editForm.controls['email'].setValue(this.userlist.email);
          this.editForm.controls['phone'].setValue(this.userlist.phone);
          console.log("userList", this.userlist);
        }
      },
      error: (err) => {
        console.log(err.error);
      }
    });

  }
  onEdit(value: any) {
    this.apiService.sendData('https://dummyjson.com/users/', value).subscribe({
      next: (res: any) => {
        if (res != null) {
          console.log("Response:", res);
          localStorage.setItem('userList', JSON.stringify(res));
          console.log("userList",res);          
          this.userlist = res;
          console.log("userList", this.userlist);
        }
      },
      error: (err) => {
        console.log(err.error);

      }
    });

  }

}

