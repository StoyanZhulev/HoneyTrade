import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutorizationService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { Output } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  public userRegForm: FormGroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required)
  })
  
  @Output() closeUserForm: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private authService: AutorizationService,
  ) { }

  ngOnInit() {
  }

  reset(){
    this.userRegForm.reset()
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
      close();
    })
  }

  close(){
    this.closeUserForm.emit('close');
  }

}
