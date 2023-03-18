import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/local-stroage.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.page.html',
  styleUrls: ['./emp-dashboard.page.scss'],
})
export class EmpDashboardPage implements OnInit  {
  loginemail:any;
  emplist :any[]=[];
  employeeData: any[]=[];
  userList:any[]=[];
index:any;
value: any;
id: any;
holder:any;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private localStorage: LocalService,
    private apiService: ApiService,
  ) { 

  
  // localStorage.getData('EmpList'); 
  //   console.log('EmpList:',this.emplist);
     
    // this.loginemail=this.actRoute.snapshot.paramMap.get('email');
    // console.log('email:',this.loginemail)
    // this.emplist = JSON.parse(localStorage.getData('EmpList'));

    
    
  }

 

  
  
  ngOnInit() {

    this.emplist = JSON.parse(localStorage.getItem('EmpList') as any);
    console.log('EmpList:', this.emplist);
    
    
    // if(this.localStorage.getData('EmpList')){
    //   console.log("ok")
    //   this.emplist = JSON.parse(this.localStorage.getData('EmpList') as any);
    //   console.log("string",this.emplist)
    // }else{
    //   console.log("data not find")
    // }
    
    this.apiService.getData('https://dummyjson.com/users').subscribe({
      next: (res: any) => {
        console.log("Response:", res);
        this.userList = res.users;
        console.log("UserList", this.userList);
      },
      error: (err) => {
        console.log(err.error);
      }
    });



  }
  routeclick(data: any) {
    this.router.navigate(['/emp-data/' + data.id]);

  }


Logout(){

this.localStorage.removeData('userlogin');
this.router.navigate(['/home']);

}
  

}




