import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private service : StudentService, private toastr: ToastrService ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData={
    ID:null,
    StudentName : '',
    Language_Arts : '',
    Science : '',
    SocialStudies : '',
    Math : ''
    }

  }

  onSubmit(form : NgForm){
    if(form.value.ID == null)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  insertRecord(form : NgForm){
  this.service.postStudent(form.value).subscribe(res=>{
    this.toastr.success('Insert Successfully','Student. Register')
    this.resetForm(form);
    this.service.refreshList();
  })
}
  updateRecord(form : NgForm)
  {
    this.service.putStudent(form.value).subscribe(res=>{
      this.toastr.info('Update Successfully','Student. Register')
      this.resetForm(form);
      this.service.refreshList();
    })
  } 


}
