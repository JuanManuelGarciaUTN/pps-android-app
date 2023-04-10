import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormBuilder, FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginPage implements OnInit {

  public email:string = "";
  public password:string = "";
  public datosInvalidos:boolean = false;
  public form: FormGroup;
  public mostrarPassword: string = "password";

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });
  }

  ngOnInit() {
    
  }

  login()
  {
    if(this.verificarDatos())
    {
      this.router.navigate(['/home'])
    }
    else
    {
      this.datosInvalidos = true;
    }
  }

  verPassword()
  {
    if(this.mostrarPassword == "password")
    {
      this.mostrarPassword = "text";
    }
    else
    {
      this.mostrarPassword = "password";
    }
  }
  verificarDatos()
  {
    this.email = this.email.trim().toLowerCase();
    this.password = this.password.trim();
    return this.email == "artlixutn@gmail.com" && this.password == "root";
  }
}
