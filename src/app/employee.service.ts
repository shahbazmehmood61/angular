import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private url = '../../assets/data/users.json';
  constructor(private http: HttpClient) {}

  getEmployee() {
    return [
      { id: 1, name: 'shahbaz', age: 22 },
      { id: 3, name: 'arslan', age: 24 },
      { id: 2, name: 'ali raza', age: 23 },
    ];
  }

  getUsers(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url);
  }
}
