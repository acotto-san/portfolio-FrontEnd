import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private uri = environment.apiBaseUrl;
  constructor(private http: HttpClient, private router: Router) { }

  login(email:string, password:string){
    this.http.post(this.uri + '/authenticate', {email:email, password:password})
    .subscribe((resp:any) => {
      //Redireccionamos al usuario a su perfil
      this.router.navigate(['profile']);
      //Guardamos el token en localStorage
      localStorage.setItem('auth_token',resp.token)
    })
  }

  //Para cerrar sesión eliminamos el token del localStorage
  logout(){
    localStorage.removeItem('auth_token');
  }

  //Un servicio para verificar si existe la sesión
  public get logIn(): boolean{
    return (localStorage.getItem('auth_token') !== null);
  }
}
