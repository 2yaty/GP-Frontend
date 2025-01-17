import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegister } from '../sign-up/user-register';
@Injectable({
  providedIn: 'root',
})
export class SignupService {
  baseUrl = 'https://dmrs.software/auth/register';
  constructor(private httpClient: HttpClient) {}

  RegisterUser(userData: UserRegister) {
    return this.httpClient.post(`${this.baseUrl}`, userData);
  }
}
