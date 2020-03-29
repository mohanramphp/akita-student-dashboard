import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { StudentStore } from './student.store';
import { Student } from './student.model';
import { tap } from 'rxjs/operators';
import { StudentDataService } from './student-data.service';
import { StudentQuery } from './student.query';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentService {
  constructor(
    private studentStore: StudentStore,
    private studentDataService: StudentDataService,
    private studentQuery: StudentQuery
  ) {}

  getStudents(): Observable<Array<Student>> {
    if (!this.studentQuery.getHasCache()) {
      return this.studentDataService.getStudents().pipe(tap(s => this.studentStore.set(s)));
    } else {
      return of();
    }
  }

  updateStudent(student: Partial<Student>) {
    this.studentStore.upsert(student.id, student);
  }

  deleteStudent(id: ID) {
    this.studentStore.remove(id);
  }
}
