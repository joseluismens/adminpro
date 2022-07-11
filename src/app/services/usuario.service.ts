import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registerForm } from '../interfaces/register-form';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login-form';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

const base_url:string= environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  constructor(private http: HttpClient, private router:Router) { }

  crearUsuario(data:registerForm){
    return this.http.post(`${base_url}/users`,data);
  }
  inciarSesion(data:LoginForm){
    return this.http.post(`${base_url}/login`,data).pipe(
      tap((res:any)=>{
        localStorage.setItem('id',res.id),
        localStorage.setItem('username',res.username),
        localStorage.setItem('token',res.token)


      })
    );
  }
  loggedIn():boolean{
    return !!localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('id');

    this.router.navigate(['/login']);
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
