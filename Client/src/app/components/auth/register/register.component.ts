import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AutorizationService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('registerForm') public registerFormModal;

  public userRegForm: FormGroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required)
  })

  public beekeeperRegForm: FormGroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    companyname: new FormControl(''),
    location: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required)
  })

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

  constructor(
    private fb: FormBuilder,
    private authService: AutorizationService,
  ) { }

  ngOnInit() {
    //   this.userRegForm = this.fb.group({
    //     'email': ['',[Validators.required, Validators.email]],
    // });
  }

  show() {
    this.registerFormModal.show();
  }

  registerUser() {
    let user = {
      type: 'user',
      firstName: this.userRegForm.controls.firstname.value,
      lastName: this.userRegForm.controls.lastname.value,
      email: this.userRegForm.controls.email.value,
      password: this.userRegForm.controls.password.value,
      confirmPassword: this.userRegForm.controls.repeatPassword.value,
    }

    this.authService.registerUser(user).subscribe(data => {
      console.log(data)
      this.userRegForm.reset();
      this.beekeeperRegForm.reset();
      this.registerFormModal.hide();
    })
  }

  registerBeekeeper() {
    let user = {
      type: 'beekeeper',
      firstName: this.beekeeperRegForm.controls.firstname.value,
      lastName: this.beekeeperRegForm.controls.lastname.value,
      companyName: this.beekeeperRegForm.controls.companyname.value,
      location: this.beekeeperRegForm.controls.location.value,
      email: this.beekeeperRegForm.controls.email.value,
      password: this.beekeeperRegForm.controls.password.value,
      confirmPassword: this.beekeeperRegForm.controls.repeatPassword.value,
    }

    console.log(user)

    this.authService.registerUser(user).subscribe(data => {
      console.log(data)
      this.userRegForm.reset();
      this.beekeeperRegForm.reset();
      this.registerFormModal.hide();
    })
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
      this.userRegForm.reset();
      this.beekeeperRegForm.reset();
      this.registerFormModal.hide();
    })
  }
}
