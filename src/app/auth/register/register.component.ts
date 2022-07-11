import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import swal from 'sweetalert2'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
 
  public formSubmited = false;

  public registerForm = this.fb.group({
    nombre:['Jose Luis',Validators.required],
    username:['jmunoz',Validators.required],
    password:['12345',Validators.required],
    password2:['12345',Validators.required],
    terminos:[true,Validators.required],
  },{
    validators: this.passwordIguales('password','password2')
  });

  constructor( private fb:FormBuilder, private usuarioService:UsuarioService) { }

  crearUsuario(){
    this.formSubmited=true;
    console.log(this.registerForm.value);
    console.log(this.registerForm)
    if ( this.registerForm.invalid ) {
      return ;
      
    }else{
      this.usuarioService.crearUsuario(this.registerForm.value).subscribe(
        (resp)=>{
          console.log(resp);
          
          swal.fire({
            icon: 'success',
            title: 'Felicidades !!',
            text: 'Te has registrado exitosamente',
          });
          
          
        },(err) =>{
            swal.fire({
              icon: 'error',
              title: 'Error.',
              text: err.error.message,
            });
        }
        

      );

    }

    
  }
  
  campoNoValido(campo:string):boolean{
    if (this.registerForm.get(campo)?.invalid &&  this.formSubmited) {
      return true;
    }else{
      return false;
    }
  }
  aceptaTerminos() {
    return !this.registerForm.get('terminos')?.value && this.formSubmited;
  }
  contrasenasNoValidas() {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if ( (pass1 !== pass2) && this.formSubmited ) {
      return true;
    } else {
      return false;
    }

  }


  passwordIguales(pass1:string,pass2:string){
    return (formGroup: FormGroup)=>{
        const pass1Control = formGroup.controls[pass1];
        const pass2Control = formGroup.controls[pass2];

        if ( pass1Control.value === pass2Control.value ) {
          pass2Control.setErrors( null )
        } else {
          pass2Control.setErrors( {noEsIgual: true } )
   
        }
    }
  }

}
