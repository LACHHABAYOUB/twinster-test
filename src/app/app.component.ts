import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from './api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class AppComponent implements OnInit {
  sale: any;
 

  constructor(private modalService: NgbModal , private apiService: ApiService) {}
  title = 'TwinsterProject';

  closeResult: string;
  size:any;
  formAdd: any;

  map: {
    '@ng-bootstrap/ng-bootstrap': 'node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
  };

  customer = {
    
    product: 'sk_test',
    user_code: 'testuser',
    gender: 'MALE',
    unit: 'METRIC',
    height: '188',
    weight:this,
    age: '35',
    body_shape: 'BOX',
    cup_cize_country: null,
    underbust_measurement: null,
    cup_size: null,
    fit: 'NORMAL',

    "relevant_attributes": []

  };


  add(){

    const Add = new Customer();

    Add.height= this.formAdd.controls.height.value;
    Add.weight=this.formAdd.controls.weight.value;
    Add.age=this.formAdd.controls.age.value;
    Add.gender= "MALE";    
    Add.body_shape= "BOX";
    Add.user_code="testuser";
    Add.product= "sk_test";
    Add.unit= "METRIC";
    Add.cup_cize_country= null;
    Add.underbust_measurement= null;
    Add.cup_size= null;
    Add.fit= "NORMAL";
    Add.relevant_attributes= []

    
    const Addmodel = Object.assign(Add, new Customer);
    this.apiService.updateCustomer(Addmodel).subscribe((res)=>{
      this.size=JSON.stringify(res);
   }
   ); 
  }

    ngOnInit(){


      this.formAdd = new FormGroup({
        product: new FormControl(''),
        user_code: new FormControl(''),
        gender: new FormControl(''),
        unit: new FormControl(''),
        height: new FormControl('' ),
        weight: new FormControl('' ),
        age: new FormControl(''),
        body_shape: new FormControl(''),
      });

    }

  


  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openLg1(contentt) {
    this.modalService.open(contentt, { size: 'lg' });
    this.closeResult;
  }
  openLg2(contenttt) {
    this.modalService.open(contenttt, { size: 'lg' });
    this.add();
         
  }
  
 


}
