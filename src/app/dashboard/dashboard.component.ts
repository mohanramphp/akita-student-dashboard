import { Component, OnInit } from '@angular/core';
import { createStudent, StudentService, StudentQuery, Student } from './state/index';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  formData: Student;

  constructor(
    private studentService: StudentService,
    public studentQuery: StudentQuery
  ) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe();
  }
  onAdd() {
    this.nullifyFormData();
    setTimeout(() => this.formData = createStudent({}));
  }
  onEdit(id: ID) {
    this.nullifyFormData();
    setTimeout(() => this.formData = this.studentQuery.getStudent(id));
  }

  onDelete(id: ID) {
    this.nullifyFormData();
    if (confirm('Are you sure to delete?')) {
      this.studentService.deleteStudent(id);
    }
  }

  updateformData(student: Student) {
    this.studentService.updateStudent(student);
    this.nullifyFormData();
  }

  nullifyFormData() {
    this.formData = null;
  }

}
