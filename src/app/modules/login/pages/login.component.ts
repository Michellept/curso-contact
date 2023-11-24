import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin! : FormGroup;

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private snackBar: MatSnackBar,

  ) {

  }

  ngOnInit(): void {
  this.initForm();
  }

  initForm(){
    this.formLogin = this.fb.group({
      userEmail:['', Validators.required],
      userPassword:['', Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ],
    })
  }

  login(){
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      return;
    }
    this.snackBar.open(
      'Ingresa la información completa del usuario',
      'Aceptar',
      { duration: 10 * 1000, panelClass: ['yellow-snackbar'] }
    );
    this.formLogin.markAllAsTouched();
  }
  


  isValidField(field: string): boolean | null {
    const control = this.formLogin.controls[field];
    return control && control.invalid && control.touched;

  }
}
