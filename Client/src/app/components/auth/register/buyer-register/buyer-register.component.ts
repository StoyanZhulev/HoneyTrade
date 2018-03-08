import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutorizationService } from '../../../../services/auth.service';

@Component({
  selector: 'app-buyer-register',
  templateUrl: './buyer-register.component.html',
  styleUrls: ['./buyer-register.component.scss']
})
export class BuyerRegisterComponent implements OnInit {

  public buyerRegForm: FormGroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    companyname: new FormControl(''),
    info: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    logo: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required)
  })
  
  @Output() closeBuyerForm: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private authService: AutorizationService,
  ) { }

  ngOnInit() {
  }

  reset(){
    this.buyerRegForm.reset()
  }

  registerBuyer() {
    let user = {
      type: 'buyer',
      companyName: this.buyerRegForm.controls.companyname.value,
      companyInformation: this.buyerRegForm.controls.info.value,
      companyLocation: {
        country: this.buyerRegForm.controls.country.value,
        city: this.buyerRegForm.controls.city.value
      },
      logoImageUrl: this.buyerRegForm.controls.logo.value,
      email: this.buyerRegForm.controls.email.value,
      password: this.buyerRegForm.controls.password.value,
      confirmPassword: this.buyerRegForm.controls.repeatPassword.value,
    }

    console.log(user)

    this.authService.registerUser(user).subscribe(data => {
      console.log(data)
      close();
    })
  }

  close(){
    this.closeBuyerForm.emit('close');
  }
}
