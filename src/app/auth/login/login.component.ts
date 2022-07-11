import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import swal from 'sweetalert2'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  
  public formSubmited = false;

  public loginForm = this.fb.group({
    username:['jmunoz',Validators.required],
    password:['12345',Validators.required],
  
  });
  
  constructor( private fb:FormBuilder, private usuarioService:UsuarioService, private router:Router) { }

  campoNoValido(campo:string):boolean{
    
    if (this.loginForm.get(campo)?.invalid &&  this.formSubmited) {
      return true;
    }else{
      return false;
    }
  }
  login(){
    this.formSubmited=true;
    if (this.loginForm.invalid) {
      return;
      
      
    }else{
      this.usuarioService.inciarSesion(this.loginForm.value).subscribe({
        next:(res)=>{
          
          
          swal.fire({
            icon: 'success',
            title: 'Felicidades !!',
            text: ' has iniciado sesión exitosamente',
          });

          this.router.navigate(['/dashboard']);
        },
        error:(err)=>{
          swal.fire({
            icon: 'error',
            title: 'Error.',
            text: err.error.message,
          });
        }
      })
       
      
    }
    
  }
}
