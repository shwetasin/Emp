import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/local-stroage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private localStorage: LocalService
  ) {
   
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required])),



    });


  }


  onSubmit(value: any){

    this.router.navigate(['/emp-dashboard']);

  }

  Signup(){
    this.router.navigate(['/emp-create']);
  }


  

}





