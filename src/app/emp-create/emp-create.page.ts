import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/local-stroage.service';


@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.page.html',
  styleUrls: ['./emp-create.page.scss'],
})
export class EmpCreatePage {
  officeForm: FormGroup;
  employeeData: any[] = [];
  holder: any[] = [];
  formSubmitted: boolean = false;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private localStorage: LocalService
  ) {
    this.officeForm = new FormGroup({
      Empolyeename: new FormControl('', Validators.compose([Validators.required])),
      Age: new FormControl('', Validators.compose([Validators.required])),
      Address: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      Password: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    });

    console.log((this.employeeData));
    console.log('Successful registration')
  }

  routeclick(email: any) {
    console.log(email)
    this.router.navigate(['/emp-dashboard/' + email]);
  }
  onSubmit(value: any) {
    console.log(this.officeForm.value);
    if (value !== null || value !== undefined) {
      let val = localStorage.getItem('EmpList');
      if (this.employeeData !== null) {
        this.employeeData = [...this.employeeData, ...[value]]
        localStorage.setItem('EmpList', JSON.stringify(this.employeeData));
        this.officeForm.reset();
      } else {
        localStorage.setItem('EmpList', JSON.stringify([value]));
        this.officeForm.reset();
        this.router.navigate(['/home']);
      }
    } else {
      this.employeeData.push(value)
      localStorage.setItem('EmpList', JSON.stringify(this.employeeData))
      this.router.navigate(['/home']);
    }
  }

  GotoEmployeeList() {
    this.router.navigate(['/home']);
  }
}
