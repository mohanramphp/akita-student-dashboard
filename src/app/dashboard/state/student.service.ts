import { Injectable } from '@angular/core';
import { noop, ID } from '@datorama/akita';
import { StudentStore } from './student.store';
import { StudentQuery } from './student.query';
import { StudentDataService } from './student-data.service';
import { Student } from './student.model';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private studentDataService: StudentDataService,
    private studentStore: StudentStore,
    private studentQuery: StudentQuery
  ) { }

  getStudents(): Observable<Array<Student>> {
    const request = this.studentDataService.getStudents().pipe(
      tap(s => this.studentStore.set(s))
    );
    return this.studentQuery.isPristine ? request : noop(); // request
  }

  deleteStudent(id: ID) {
    this.studentStore.remove(id);
  }

  updateStudent(student: Student) {
    this.studentStore.createOrReplace(student.id, { ...student });
  }

}
