import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './welcome/Student';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getAllData(){
   return  this.http.get<Student[]>("http://192.168.29.52:8080/getData");

  }

  
  
}
