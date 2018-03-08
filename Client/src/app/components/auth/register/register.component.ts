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

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.registerFormModal.show();
  }

  close(){
    this.registerFormModal.hide();    
  }
}
