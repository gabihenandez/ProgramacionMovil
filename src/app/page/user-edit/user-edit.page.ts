import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage  {

  constructor() { }
  
  user = {
    usuario: '',
    email : '',
    paterno: '',
    materno : '',
    phone:'',
    flagEmail:false,
    flagUsuario:false,
    flagPaterno:false,
    flagMaterno:false,
    flagPhone:false,
  }

  ngOnInit() {
  }

  onKeyUpEmail(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp("^[A-Za-z0-9-@.#-$%&'*_]*$");
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
    let email = new RegExp("[a-zA-Z0-9.#$%&'*_-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    if(!email.test(this.user.email)){
      this.user.flagEmail =false;
    }else{
      this.user.flagEmail = true;
    }
  }
  

  onKeyUp(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp("^[A-Za-z? ]+$");
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
      this.user.flagUsuario = true;
    }
    let usuarios = new RegExp("^[A-Za-z? ]+$");
    if(event.target.name=="usuario"){
      if(!usuarios.test(this.user.usuario)){
        this.user.flagUsuario = false;
      }else{
        this.user.flagUsuario = true;
      }
    }
    if(event.target.name=="paterno"){
        if(!usuarios.test(this.user.paterno)){
          this.user.flagPaterno = false;
        }else{
          this.user.flagPaterno = true;
        }
    }
    if(event.target.name=="materno"){
      if(!usuarios.test(this.user.materno)){
        this.user.flagMaterno = false;
      }else{
        this.user.flagMaterno = true;
       }
   }
 }

 onKeyPhone(event: any){
  let newValue = event.target.value;
  console.log(newValue);
  let regExp = new RegExp("[0-9]");
  if(!regExp.test(newValue)){
    event.target.value = newValue.slice(0, -1);
  }

  let telefono = new RegExp("^[0-9]*$");
  if(!telefono.test(this.user.phone)){
      event.target.value = newValue.slice(0, -1);
      this.user.flagPhone =false;
  
  }else{
    this.user.flagPhone = true;
  }
}

 async onSubmit(_form: NgForm){
  alert("Usuario Editado")
  console.log(this.user)
 } 
}
