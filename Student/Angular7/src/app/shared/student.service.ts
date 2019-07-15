import { Injectable } from '@angular/core';
import { Student } from './student.model';
import{ HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  formData: Student;
  list: Student[];
  readonly rootURL="http://localhost:52719/api"

  constructor(private http : HttpClient) { }

  postStudent(formData : Student){
    return this.http.post(this.rootURL + '/Students',formData);
  }
  
  refreshList(){
    this.http.get(this.rootURL + '/Students')
    .toPromise().then(res=> this.list = res as Student[])
  }

  putStudent(formData : Student){
    return this.http.put(this.rootURL + '/Students/'+ formData.ID,formData);
  }
  deleteStudent(id:number){
    return this.http.delete(this.rootURL + '/Students/'+id);
  }

  

}
