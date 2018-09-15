import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { Student } from './student.model';
import { guid } from '@datorama/akita';

const students: Array<Student> = [
  {
    id: guid(),
    name: 'Mohan Ram',
    sex: 'Male',
    standard: 12,
    quarterlyScore: 80,
    halfyearlyScore: 76,
    annualScore: 89
  },
  {
    id: guid(),
    name: 'Sowmiya',
    sex: 'Female',
    standard: 11,
    quarterlyScore: 90,
    halfyearlyScore: 94,
    annualScore: 97
  },
  {
    id: guid(),
    name: 'Suresh',
    sex: 'Male',
    standard: 8,
    quarterlyScore: 56,
    halfyearlyScore: 54,
    annualScore: 58
  },
  {
    id: guid(),
    name: 'Rithika',
    sex: 'Female',
    standard: 4,
    quarterlyScore: 87,
    halfyearlyScore: 67,
    annualScore: 78
  }
];

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor() { }

  getStudents(): Observable<Array<Student>> {
    return timer(200).pipe(mapTo(students));
  }
}
