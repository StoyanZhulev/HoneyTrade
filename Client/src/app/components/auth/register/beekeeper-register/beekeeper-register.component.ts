import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutorizationService } from '../../../../services/auth.service';

@Component({
  selector: 'app-beekeeper-register',
  templateUrl: './beekeeper-register.component.html',
  styleUrls: ['./beekeeper-register.component.scss']
})
export class BeekeeperRegisterComponent implements OnInit {

  public beekeeperRegForm: FormGroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    companyname: new FormControl(''),
    location: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required)
  })
  
  @Output() closeBeekeeperForm: EventEmitter<any> = new EventEmitter<any>();

  
  constructor(
    private authService: AutorizationService,
  ) { }

  ngOnInit() {
  }


  reset(){
    this.beekeeperRegForm.reset()
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
      this.close();
    })
  }


  close(){
    this.closeBeekeeperForm.emit('close');
  }
}
