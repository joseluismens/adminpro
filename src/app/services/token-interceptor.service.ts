import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private usuarioService:UsuarioService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
      let tokenizeReq = req.clone({
        setHeaders:{
            Authorization:`Bearer ${this.usuarioService.getToken()}`
        }
      });
      return next.handle(tokenizeReq);
  }
}
